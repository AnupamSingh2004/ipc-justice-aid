import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Use cookies() in an async way
    const cookieStore =await cookies();
    const sessionId = await cookieStore.get('session')?.value;

    if (!sessionId) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const session = await prisma.userSession.findUnique({
      where: { id: sessionId },
      include: { user: true },
    });

    if (!session || new Date() > session.expiresAt) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    // Return user without sensitive data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = session.user;
    
    return NextResponse.json({ user: userWithoutPassword }, { status: 200 });
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Failed to get user information' },
      { status: 500 }
    );
  }
}