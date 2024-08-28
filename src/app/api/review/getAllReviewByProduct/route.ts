import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Review from '@/models/Review';




export async function GET(req: NextRequest) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get('id');

  if (!productId || typeof productId !== 'string') {
    return NextResponse.json(
      { message: 'product is required and should be a string' },
      { status: 400 }
    );
  }
  try {
    const review = await Review.find({ product: productId });
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching Review' }, { status: 500 });
  }
}