import { connectToDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json(); 
    
    console.log(body)
    const newPost = new Post(body);
    
    await newPost.save();

    return NextResponse.json({ message: "Post inserted successfully!", post: newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
