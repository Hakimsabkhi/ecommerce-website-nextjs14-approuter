import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Address from '@/models/Address';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase(); // Ensure the database connection is established
    const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const user = await User.findOne({ email:token.email});
    if (!user ) {
      return NextResponse.json({ error: 'Forbidden: Access is denied' }, { status: 404 });
    }
    // Fetch all categories but only return the name and imageUrl fields
    const address = await Address.find({user}).sort({ createdAt: -1 })// Only select the 'name' and 'imageUrl' fields

    // Return the fetched category names and image URLs
    return NextResponse.json(address, { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}