import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Brand from '@/models/Brand';


export async function GET(req: NextRequest) {
    await connectToDatabase();
  
    try {
      const brands = await Brand.find({});
      return NextResponse.json(brands);
    } catch (error) {
      return NextResponse.json({ message: 'Error fetching brands' }, { status: 500 });
    }
  }
  