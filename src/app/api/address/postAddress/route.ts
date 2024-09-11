import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Address from '@/models/Address';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';

export async function POST(req: NextRequest) {
    await connectToDatabase();
  
    const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const user = await User.findOne({ email:token.email});
    try {
      // Handle form data
      const formData = await req.formData();
      const governorate = formData.get('governorate') as string | null;
      const city = formData.get('city') as number | null;
      const address = formData.get('address') as string | null;
      const phone = formData.get('phone') as string | null;
     
         // Validate fields and prepare error message
         
         if (!governorate || !city||!user||!address) {
          return NextResponse.json({ message: 'all is required' }, { status: 400 });
        }
    const addresstow= await Address.find({user})
    if(addresstow.length==2){
      return NextResponse.json({ message: 'You have reached the limit of 2 addresses.' }, { status: 405 });
    }
      // Save the phone in user to the database
    user.phone=phone ?? '';
      user.save();
      // Save the data in address to the database
      const newAddress = new Address({ governorate,city, address,user });
      await newAddress.save();
      // Return a success response
   return NextResponse.json({ message: 'addresss submitted successfully' }, { status: 200 }); 
    } catch (error) {
      return NextResponse.json({ message: 'Error creating address' }, { status: 500 });
    }
  }