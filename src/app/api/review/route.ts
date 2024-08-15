import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Review from '@/models/Review';




export async function GET(req: NextRequest) {
  await connectToDatabase();

  try {
    const review = await Review.find({});
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching brands' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    await connectToDatabase();
  
    try {
      // Handle form data
      const formData = await req.formData();
      const product = formData.get('productId') as string | null;
      const rating = formData.get('rating') as string | null;
      const text = formData.get('text') as string | null;
      const email = formData.get('email') as string | null;
     

         // Validate fields and prepare error message
    let errorMessage = '';
    
    if (!rating) {
      errorMessage = 'Rating is required';
    } else if (!text) {
      errorMessage = 'Text is required';
    } else if (!email) {
      errorMessage = 'Email is required';
    } 
    else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorMessage = 'Invalid email format';
    } else if (isNaN(Number(rating)) || Number(rating) < 1 || Number(rating) > 5) {
      errorMessage = 'Rating must be a number between 1 and 5';
    }
      const existingReviw = await Review.findOne({ email:email });
      if (existingReviw) {
        return NextResponse.json({ message: 'Review already exists' }, { status: 400 });
      }

  
      const newReview = new Review({
        product,
        rating,
        text,
        email,
        
      });
  
      // Save the new review to the database
      await newReview.save();
  
      // Return a success response
      return NextResponse.json({ message: 'Review submitted successfully' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error creating Review' }, { status: 500 });
    }
  }