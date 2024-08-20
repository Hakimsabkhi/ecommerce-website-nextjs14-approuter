//import { v2 as cloudinary } from 'cloudinary';
import cloudinary from '@/lib/cloudinary';
import stream from 'stream';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Category from '@/models/Category';
export async function GET(){
  try{
    await connectToDatabase();
    await User.find();
    const categories = await Category.find({}).populate("user");
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}