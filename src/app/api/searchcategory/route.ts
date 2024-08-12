import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Category from '@/models/Category';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    // Extract the 'category' query parameter from the request URL
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');

    if (!category || typeof category !== 'string') {
      return NextResponse.json(
        { message: 'Category name is required and should be a string' },
        { status: 400 }
      );
    }

    // Find the category by name
    const foundCategory = await Category.findOne({ name: category });

    if (!foundCategory) {
      return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json(foundCategory, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
