import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Order from '@/models/order';
import User from '@/models/User';
import Address from '@/models/Address';
import { getToken } from 'next-auth/jwt';



export async function GET(req: NextRequest,{ params }: { params: { ref: string } }) {
  const { ref } = params;
  if (!ref) {
    return NextResponse.json(
      { message: "Invalid or missing ref" },
      { status: 400 }
    );
  }
  try {
    await connectToDatabase(); // Ensure the database connection is established
  
    
    const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const user = await User.findOne({ email:token.email});
    // Parse the request body
    if (!user){
        return NextResponse.json({ success: false, message: "Missing required connect" }, { status: 505 });
    }
  
     await User.find();
    await Address.find({});
    // Fetch all categories but only return the name and imageUrl fields
    const order = await Order.findOne({ref}).populate('address').populate('user','username phone'); // Only select the 'name' and 'imageUrl' fields

    // Return the fetched category names and image URLs
    return new NextResponse(JSON.stringify(order), { status: 200 });
  
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}