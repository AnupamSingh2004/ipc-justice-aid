import { NextResponse } from 'next/server';

export async function GET() {
  // Build the Google OAuth URL with the correctly matching redirect URI
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${process.env.GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(`${process.env.NEXTAUTH_URL}/api/auth/google/callback`)}` +
    `&response_type=code` +
    `&scope=${encodeURIComponent('profile email')}` +
    `&access_type=offline` +
    `&prompt=consent`;

  return NextResponse.redirect(googleAuthUrl);
}