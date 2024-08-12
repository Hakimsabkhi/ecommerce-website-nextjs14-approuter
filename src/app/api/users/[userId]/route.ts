import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

export async function GET(req: NextRequest, { params }: { params: { userId: string } })  {
  await connectToDatabase();
  const { userId } = params;
  const user = await User.findById(userId);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json({ user });
}

export async function DELETE(req: NextRequest, { params }: { params: { userId: string } })  {
  await connectToDatabase();
  const { userId } = params;
  await User.findByIdAndDelete(userId);
  return NextResponse.json({}, { status: 204 });
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } })  {
  await connectToDatabase();
  const { userId } = params;
  const { role } = await req.json();

  const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json({ user });
}
