import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  
  if (error || !code) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login?error=${encodeURIComponent(error || 'No authorization code')}`);
  }

  try {
    // Exchange the code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/google/callback`,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Google token error:', tokens);
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login?error=Token+exchange+failed`);
    }

    // Get user info with the access token
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    const googleUser = await userResponse.json();

    if (!userResponse.ok) {
      console.error('Google user info error:', googleUser);
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login?error=Failed+to+get+user+info`);
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { email: googleUser.email },
    });

    if (user) {
      // Update Google ID if not present
      if (!user.googleId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { 
            googleId: googleUser.id,
            lastLogin: new Date()
          },
        });
      } else {
        // Update last login
        user = await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() }
        });
      }
    } else {
      // Create new user
      user = await prisma.user.create({
        data: {
          id: uuidv4(),
          email: googleUser.email,
          name: googleUser.name,
          googleId: googleUser.id,
          profileImage: googleUser.picture,
          lastLogin: new Date(),
        },
      });
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

    // Return successful response with session cookie and redirect to home page
    const response = NextResponse.redirect(`${process.env.NEXTAUTH_URL}/`);
    
    response.cookies.set({
      name: 'session',
      value: session.id,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Google auth callback error:', error);
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login?error=Authentication+failed`);
  }
}