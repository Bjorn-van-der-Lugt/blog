import { connectToDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req, context) {
  const params = await context.params; 
  const id = params?.id; 

  try {
    await connectToDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ error: "Database query failed", details: error.message }, { status: 500 });
  }
}
