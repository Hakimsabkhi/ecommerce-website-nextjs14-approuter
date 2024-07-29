import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDatabase from '../../../lib/db';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';

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

export default NextAuth({
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
          const user = await User.findOne({ email: credentials.email });

          if (user && bcrypt.compareSync(credentials.password, user.password || '')) {
            return { id: user._id, name: user.username, email: user.email, role: user.role };
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
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          role: token.role as 'Visitor' | 'Rédacteur' | 'Admin',
      
        };
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // Add role to the token
      }
      
      return token;
    },
    async signIn({ user, account, profile }) {
      try {
        await connectToDatabase();

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          // If the user does not exist, create a new user
          const newUser = new User({
            username: user.name,
            email: user.email as string, // Ensure email is a string
            password: undefined, // No password for Google users
            role: 'Visitor', // Default role
          });

          await newUser.save();
        } else {
          // If the user exists, update their information if necessary
          existingUser.username = user.name;
          await existingUser.save();
        }

        return true;
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      // Redirect user to home page after sign-in
      return baseUrl;
    },
  },
  secret: nextAuthSecret,
});