import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

interface GoogleProfile {
  id: string;
  displayName: string;
  emails?: Array<{ value: string; verified?: boolean }>;
  photos?: Array<{ value: string }>;
  name?: {
    familyName?: string;
    givenName?: string;
    middleName?: string;
  };
  provider: string;
  _json: unknown;
  _raw: string;
}

const prisma = new PrismaClient();

// Configure Passport local strategy with correct callback signature
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email: string, password: string, done) => {
      try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        // Check if user has a password (might not if they only used OAuth)
        if (!user.password) {
          return done(null, false, { message: 'Please log in with Google.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        return done(null, user);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

// Configure Passport Google strategy with correct callback signature
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `${process.env.NEXTAUTH_URL}/api/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Cast profile to our defined interface
        const googleProfile = profile as unknown as GoogleProfile;
        const email = googleProfile.emails?.[0].value;

        if (!email) {
          return done(new Error('No email found from Google profile'));
        }

        // Check if user exists
        let user = await prisma.user.findUnique({ where: { email } });

        if (user) {
          // Update Google ID if not present
          if (!user.googleId) {
            user = await prisma.user.update({
              where: { id: user.id },
              data: { googleId: googleProfile.id },
            });
          }
        } else {
          // Create new user
          user = await prisma.user.create({
            data: {
              email,
              name: googleProfile.displayName,
              googleId: googleProfile.id,
              profileImage: googleProfile.photos?.[0].value,
            },
          });
        }

        // Update last login time
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() }
        });

        return done(null, user);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

// Serialize and deserialize user with correct function signatures
passport.serializeUser((user, done) => {
  // Use type assertion to handle the type mismatch
  const typedUser = user as User;
  done(null, typedUser.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id as string } });
    done(null, user);
  } catch (error) {
    done(error as Error);
  }
});

export default passport;
