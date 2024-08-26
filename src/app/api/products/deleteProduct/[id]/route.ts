import { NextRequest, NextResponse } from "next/server"; // Use the new Next.js 13 API route types
import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import cloudinary from "@/lib/cloudinary";
import User from "@/models/User";
import { getToken } from "next-auth/jwt";



const extractPublicId = (url: string): string => {
  // Match the public ID from the URL
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);

  // If the format includes folders, split and get the last part
  if (matches) {
    return matches[1];
  }

  // Handle cases with folder paths
  const segments = url.split("/");
  const lastSegment = segments.pop();
  return lastSegment ? lastSegment.split(".")[0] : "";
};



  export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  //fatcg the user
  
      // Find the user by email
      const user = await User.findOne({ email:token.email});
  
      
      if (!user || user.role !== 'Admin' && user.role !== 'Rédacteur') {
        return NextResponse.json({ error: 'Forbidden: Access is denied' }, { status: 404 });
      }
    try {
      const { id } = params;
  
      // Find the product by ID
      const product = await Product.findById(id);
      if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
  
      // If the product has an associated image, delete it from Cloudinary
      if (product.imageUrl) {
        const publicId = extractPublicId(product.imageUrl);
        if (publicId) {
          await cloudinary.uploader.destroy(`Products/${publicId}`);
        }
      }
  
      // Delete the product from the database
      await Product.findByIdAndDelete(id);
  
      return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error deleting product' }, { status: 500 });
    }
}