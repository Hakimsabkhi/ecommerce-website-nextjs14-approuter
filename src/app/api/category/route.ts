import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Category from '@/models/Category';
//import { v2 as cloudinary } from 'cloudinary';
import cloudinary from '@/lib/cloudinary';
import stream from 'stream';
import User from '@/models/User';

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

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    // Handle form data
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const user = formData.get('user') as string;
    const imageFile = formData.get('image') as File | null;
    const logoFile = formData.get('logo') as File | null;
    const bannerFile = formData.get('banner') as File | null;
    if (!name || !user) {
      return NextResponse.json({ message: 'Name is required' }, { status: 400 });
    }

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return NextResponse.json({ message: 'Category with this name already exists' }, { status: 400 });
    }

    let imageUrl = '';
    let logoUrl = '';
    let bannerUrl ='';
    if (imageFile) {
      const imageBuffer = await imageFile.arrayBuffer();
      const bufferStream = new stream.PassThrough();
      bufferStream.end(Buffer.from(imageBuffer));

      const result = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'categories' },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            resolve(result);
          }
        );

        bufferStream.pipe(uploadStream);
      });

      imageUrl = result.secure_url; // Extract the secure_url from the result
    }

    if (logoFile) {
      const logoBuffer = await logoFile.arrayBuffer();
      const logoBufferStream = new stream.PassThrough();
      logoBufferStream.end(Buffer.from(logoBuffer));

      const logoResult = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'categories/logos' },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            resolve(result);
          }
        );

        logoBufferStream.pipe(uploadStream);
      });

      logoUrl = logoResult.secure_url;
    }
    if (bannerFile) {
      const bannerBuffer = await bannerFile.arrayBuffer();
      const bannerBufferStream = new stream.PassThrough();
      bannerBufferStream.end(Buffer.from(bannerBuffer));

      const bannerResult = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'categories/banner' },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            resolve(result);
          }
        );

        bannerBufferStream.pipe(uploadStream);
      });

      bannerUrl = bannerResult.secure_url;
    }
    
    
    const newCategory = new Category({ name, logoUrl, imageUrl, bannerUrl, user });
    await newCategory.save();
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating category' }, { status: 500 });
  }
}
