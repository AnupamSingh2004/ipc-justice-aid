import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create a session
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

    const session = await prisma.userSession.create({
      data: {
        id: uuidv4(),
        userId: user.id,
        expiresAt,
        ipAddress: req.headers.get('x-forwarded-for') || null,
        userAgent: req.headers.get('user-agent') || null,
      },
    });

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Return user and session
    // FIX: Rename the destructured password variable to avoid redeclaration
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _password, ...userWithoutPassword } = user;
    
    return NextResponse.json(
      { 
        user: userWithoutPassword, 
        sessionId: session.id 
      }, 
      { 
        status: 200,
        headers: {
          'Set-Cookie': `session=${session.id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}` // 7 days
        } 
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Failed to authenticate user' },
      { status: 500 }
    );
  }
}