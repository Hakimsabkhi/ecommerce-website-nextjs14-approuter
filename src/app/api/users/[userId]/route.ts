import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';

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

    //check token
const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});
if (!token) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
//fatcg the user

  // Find the user by email
  const user = await User.findOne({ email:token.email});

  if (!user || user.role !== 'Admin') {
    return NextResponse.json({ error: 'Foridden:Access is denied' }, { status: 404 });
  }

  await User.findByIdAndDelete(userId);
  return NextResponse.json({}, { status: 204 });
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string ,adminId:string} })  {
  await connectToDatabase();
  const userId=params.userId;
  const  adminId= params.adminId;
  const { role } = await req.json();
  console.log(role);
  
  // Find the admin user performing the deletion
  const adminUser = await User.findById(adminId); // Adjust according to your auth setup
  if (!adminUser || adminUser.role !== 'Admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 }); // Return 403 Forbidden if not an Admin
  }
  

  const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 402 });
  }
  return NextResponse.json({ user });
}
