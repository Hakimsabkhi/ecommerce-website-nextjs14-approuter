import { NextRequest, NextResponse } from "next/server"; // Use the new Next.js 13 API route types
import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer";
import stream from "stream";
import User from "@/models/User";
import Category from "@/models/Category";
import Brand from "@/models/Brand";



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

const uploadSingle = (req: any, res: any) => {
  return new Promise((resolve, reject) => {
    upload.single('image')(req, res, (err: any) => {
      if (err) return reject(err);
      resolve(req.file);
    });
  });
};

// Handler for GET requests
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params; // Get `id` from params

    if (!id) {
      return new NextResponse(JSON.stringify({ message: "Invalid or missing product ID" }), { status: 400 });
    }
    await User.find();
    await Category.find();
    await Brand.find();
    const product = await Product.findById(id)
      .populate("user")
      .populate("category")
      .populate("brand");

    if (!product) {
      return new NextResponse(JSON.stringify({ message: "Product not found" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });

  } catch (error) {
    console.error("Error fetching product:", error);
    return new NextResponse(JSON.stringify({ message: "Error fetching product" }), { status: 500 });
  }
}

// Handler for PUT requests
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      await dbConnect();
      const { id } = params;
      if (!id) {
        return new NextResponse(JSON.stringify({ message: "Product ID is required" }), { status: 400 });
      }
      console.log(id);
      
  
      const file = await uploadSingle(req as any, null as any);
      const formData = await req.formData();;
      const name = formData.get('name')?.toString();
      const description = formData.get('description')?.toString();
      const ref = formData.get('ref')?.toString();
      const category = formData.get('category')?.toString();
      const brand = formData.get('brand')?.toString();
      const stock = formData.get('stock')?.toString();
      const price = formData.get('price')?.toString();
      const discount = formData.get('discount')?.toString();
      const user = formData.get('user')?.toString();
  
      const product = await Product.findById(id);
      if (!product) {
        return new NextResponse(JSON.stringify({ message: "Product not found" }), { status: 404 });
      }
  
      let imageUrl = product.imageUrl;
  
      if (file) {
        if (product.imageUrl) {
          const publicId = extractPublicId(product.imageUrl);
          if (publicId) {
            await cloudinary.uploader.destroy(`Products/${publicId}`);
          }
        }
  
        const bufferStream = new stream.PassThrough();
        bufferStream.end((file as Express.Multer.File).buffer);
  
        const result = await new Promise<any>((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'Products' },
            (error, result) => {
              if (error) {
                console.error('Cloudinary Upload Error:', error);
                return reject(error);
              }
              resolve(result);
            }
          );
          bufferStream.pipe(uploadStream);
        });
  
        imageUrl = result.secure_url;
      }
  
      const updatedData: Partial<typeof Product.schema.obj> = {};
      if (name) updatedData.name = name;
      if (description) updatedData.description = description;
      if (ref) updatedData.ref = ref;
      if (category) updatedData.category = category;
      if (brand) updatedData.brand = brand;
      if (stock) updatedData.stock = parseInt(stock);
      if (price) updatedData.price = parseFloat(price);
      if (discount) updatedData.discount = parseFloat(discount);
      if (user) updatedData.user = user;
      if (imageUrl) updatedData.imageUrl = imageUrl;
  
      const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
      if (!updatedProduct) {
        return new NextResponse(JSON.stringify({ message: "Failed to update product" }), { status: 404 });
      }
  
      return new NextResponse(JSON.stringify(updatedProduct), { status: 200 });
  
    } catch (error) {
      console.error("Error updating product:", error);
      return new NextResponse(JSON.stringify({ message: "Error updating product" }), { status: 500 });
    }
  }
  export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
  
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