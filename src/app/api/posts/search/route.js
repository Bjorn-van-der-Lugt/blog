import { connectToDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req) {
  await connectToDB();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const author = searchParams.get("author");
  const tags = searchParams.getAll("tags"); 
  const date = searchParams.get("date"); 
  const title = searchParams.get("title");
  const content = searchParams.get("content");
  const limit = parseInt(searchParams.get("limit")) || 10; 
  const sort = searchParams.get("sort") || "createdAt"; 

  let query = {};


  if (category) {
    query["metadata.category"] = { 
      $regex: `^${category}$`, 
      $options: "i" 
    };
    
  }

  
  if (author && author.length >= 5) {
    query["metadata.author"] = { 
      $regex: author.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 
      $options: "i" 
    };
  }


  if (tags.length > 0) {
    query["metadata.tags"] = { 
      $in: tags.map(tag => new RegExp(tag, "i")) 
    };    
  }


  if (date) {
    let dateFilter = {};
  
    if (date.length === 4) {
      // Year (YYYY)
      dateFilter = {
        $gte: new Date(`${date}-01-01T00:00:00.000Z`),
        $lt: new Date(`${parseInt(date) + 1}-01-01T00:00:00.000Z`)
      };
    } else if (date.length === 7) {
      // Month (YYYY-MM)
      const [year, month] = date.split("-").map(Number);
      dateFilter = {
        $gte: new Date(Date.UTC(year, month - 1, 1)), 
        $lt: new Date(Date.UTC(year, month, 1))
      };
    } else if (date.length === 10) {
      // Exact Date (YYYY-MM-DD)
      const [year, month, day] = date.split("-").map(Number);
      dateFilter = {
        $gte: new Date(Date.UTC(year, month - 1, day, 0, 0, 0)),  
        $lt: new Date(Date.UTC(year, month - 1, day, 23, 59, 59))  
      };
    }
  
    // ✅ Force MongoDB to receive actual Date objects
    query["metadata.createdAt"] = {
      $gte: dateFilter.$gte, 
      $lt: dateFilter.$lt
    };
  }
  
  // Log query to verify it's correct before sending to MongoDB
  console.log("Final Query Sent to MongoDB:", query);  
  

  if (title) {
    query.title = { $regex: title, $options: "i" };
  }

  
  if (content && content.length >= 6) {
    query["sections.paragraphs.content"] = { $regex: content, $options: "i" };
  }

  try {
    const posts = await Post.find(query)
    
      .sort({ [sort]: -1 }) 
      .limit(limit); 

    if (!posts.length) {
      return NextResponse.json({ message: "No posts found" }, { status: 404 });
    }

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Database query failed", details: error.message }, { status: 500 });
  }
}
