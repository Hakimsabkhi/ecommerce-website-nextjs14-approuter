import { NextAuthOptions, Session, User, DefaultSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import connectToDatabase from '@/lib/db';
import bcrypt from 'bcryptjs';
import UserModel from '@/models/User';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: 'Visitor' | 'Rédacteur' | 'Admin'; // Ensure role is correctly typed
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    role?: 'Visitor' | 'Rédacteur' | 'Admin'; // Ensure role is correctly typed
  }
}

type UserType = {
  _id: string;
  username: string;
  email: string;
  password?: string;
  role?: 'Visitor' | 'Rédacteur' | 'Admin'; // Ensure role is correctly typed
  save: () => Promise<UserType>;
};

// Type guard to ensure environment variables are defined
function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Ensure environment variables are defined
const googleClientId: string = getEnvVar('GOOGLE_CLIENT_ID');
const googleClientSecret: string = getEnvVar('GOOGLE_CLIENT_SECRET');
const nextAuthSecret: string = getEnvVar('NEXTAUTH_SECRET');

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        try {
          await connectToDatabase();
          const user = await UserModel.findOne({ email: credentials.email }) as UserType | null;

          if (user && bcrypt.compareSync(credentials.password, user.password || '')) {
            return { id: user._id.toString(), name: user.username, email: user.email, role: user.role };
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: undefined,
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          role: token.role as 'Visitor' | 'Rédacteur' | 'Admin',
          
         };
      }
      console.log(token.role);
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // Ensure role is correctly set
      }
      return token;
    },
    async signIn({ user }: { user: User }) {
      try {
        await connectToDatabase();
        const existingUser = await UserModel.findOne({ email: user.email as string }) as UserType | null;
        if (!existingUser) {
          const newUser = new UserModel({
            username: user.name!,
            role: user.role,
            email: user.email as string,
            password: undefined,
          }) as UserType;
          await newUser.save();
        } else {
          existingUser.username = user.name!;
          existingUser.role = user.role; // Update role if necessary
          await existingUser.save();
        }
        return true;
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false;
      }
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl;
    },
  },
  secret: nextAuthSecret,
};
