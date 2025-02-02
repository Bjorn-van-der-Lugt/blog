import { connectToDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ message: "✅ MongoDB Connected Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "❌ MongoDB Connection Failed", details: error.message }, { status: 500 });
  }
}
