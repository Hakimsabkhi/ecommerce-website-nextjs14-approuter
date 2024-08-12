import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Category from '@/models/Category';
import Product from '@/models/Product';
import cloudinary from '@/lib/cloudinary';
import upload from '@/lib/multer';
import stream from 'stream';
import { promisify } from 'util';
import User from '@/models/User';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadFiles = promisify(upload.fields([{ name: 'image', maxCount: 1 }, { name: 'logo', maxCount: 1 }]));

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();

  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: 'Invalid or missing category ID' }, { status: 400 });
  }

  try {
    await User.find();
    const category = await Category.findById(id);

    if (!category) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching category' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();

  try {
    // Handle form data
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const user = formData.get('user') as string;
    const imageFile = formData.get('image') as File | null;
    const logoFile = formData.get('logo') as File | null;

    const id = params.id; // Get ID from params

    if (!id ) {
      return NextResponse.json({ message: 'ID  are required' }, { status: 400 });
    }

    const existingCategory = await Category.findById(id);
    if (!existingCategory) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    }

    if (existingCategory.name !== name) {
      const duplicateCategory = await Category.findOne({ name });
      if (duplicateCategory) {
        return NextResponse.json({ message: 'Category with this name already exists' }, { status: 400 });
      }
    }

    // Initialize URLs with existing values
    let imageUrl = existingCategory.imageUrl;
    let logoUrl = existingCategory.logoUrl;

    // Handle image file upload
    if (imageFile) {
      const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
      const imageStream = new stream.PassThrough();
      imageStream.end(imageBuffer);

      const { secure_url: newImageUrl } = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'categories' },
          (error, result) => {
            if (error) return reject(new Error(`Image upload failed: ${error.message}`));
            resolve(result);
          }
        );
        imageStream.pipe(uploadStream);
      });

      imageUrl = newImageUrl; // Update imageUrl with the uploaded URL
    }

    // Handle logo file upload
    if (logoFile) {
      const logoBuffer = Buffer.from(await logoFile.arrayBuffer());
      const logoStream = new stream.PassThrough();
      logoStream.end(logoBuffer);

      const { secure_url: newLogoUrl } = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'categories/logos' },
          (error, result) => {
            if (error) return reject(new Error(`Logo upload failed: ${error.message}`));
            resolve(result);
          }
        );
        logoStream.pipe(uploadStream);
      });

      logoUrl = newLogoUrl; // Update logoUrl with the uploaded URL
    }

    // Update category with new values
    existingCategory.name = name;
    existingCategory.logoUrl = logoUrl;
    existingCategory.imageUrl = imageUrl;
    existingCategory.user = user;
    await existingCategory.save();
    
    return NextResponse.json(existingCategory, { status: 200 });
  } catch (error) {
    console.error(error); // Log error for debugging
    return NextResponse.json({ message: 'Error updating category', error }, { status: 500 });
  
}
}


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();

  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: 'Invalid or missing category ID' }, { status: 400 });
  }

  try {
    const products = await Product.find({ category: id });
    if (products.length > 0) {
      return NextResponse.json({ message: 'Cannot delete category with associated products' }, { status: 400 });
    }

    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    }

    if (category.imageUrl) {
      const publicId = extractPublicId(category.imageUrl);
      if (publicId) {
        await cloudinary.uploader.destroy(`categories/${publicId}`);
      }
    }

    if (category.logoUrl) {
      const publicId = extractPublicId(category.logoUrl);
      if (publicId) {
        await cloudinary.uploader.destroy(`categories/logos/${publicId}`);
      }
    }

    await Category.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Category deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error deleting category' }, { status: 500 });
  }
}

function extractPublicId(url: string): string {
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);
  if (matches) {
    return matches[1];
  }
  const segments = url.split("/");
  const lastSegment = segments.pop();
  return lastSegment ? lastSegment.split(".")[0] : "";
}
