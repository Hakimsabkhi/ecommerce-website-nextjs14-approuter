import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

export const GET = async (req: NextRequest) => {
  await connectToDatabase();

  try {
    // Fetch all users excluding those with 'Admin' role
    const users = await User.find({ role: { $ne: 'Admin' } });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
};
