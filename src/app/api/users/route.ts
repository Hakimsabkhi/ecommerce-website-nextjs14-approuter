import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

export const GET = async (req: NextRequest) => {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const em = searchParams.get('email');

  if (!em) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

    // Find the user by email
    const user = await User.findOne({ email:em});

    if (!user || user.role !== 'Admin') {
      return NextResponse.json({ error: 'User not found or is an Admin' }, { status: 404 });
    }
  try {
    // Fetch all users excluding those with 'Admin' role
    const users = await User.find({ role: { $ne: 'Admin' } });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
};
