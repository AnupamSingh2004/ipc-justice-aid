import {  NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST() {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('session')?.value;

    if (sessionId) {
      // Delete the session from the database
      await prisma.userSession.delete({
        where: { id: sessionId },
      }).catch(() => {
        // Ignore errors if session doesn't exist
      });
    }

    // Clear the session cookie
    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          'Set-Cookie': 'session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
        }
      }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}