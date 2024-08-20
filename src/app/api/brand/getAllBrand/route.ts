import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Brand from '@/models/Brand';
import cloudinary from '@/lib/cloudinary';
import upload from '@/lib/multer'; // Adjust the path according to your project structure
import stream from 'stream';
import { promisify } from 'util';
import { getToken } from 'next-auth/jwt';
import User from '@/models/User';

export async function GET(req: NextRequest) {
    await connectToDatabase();
  
    try {
      const brands = await Brand.find({});
      return NextResponse.json(brands);
    } catch (error) {
      return NextResponse.json({ message: 'Error fetching brands' }, { status: 500 });
    }
  }
  