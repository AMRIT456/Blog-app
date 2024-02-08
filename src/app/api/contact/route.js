import dbConnect from "@/utils/dbcon"; // Corrected the import path
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json(); // Corrected to await req.json()
    await dbConnect();
    await Contact.create(body);
    return NextResponse.json({
      body: { message: "Message sent successfully!" }, // Corrected the object syntax
      init: { status: 200 },
    });
  } catch (e) {
    return NextResponse.json({
      body: { message: "Server error. Please try again!" }, // Corrected the object syntax
      init: { status: 500 },
    });
  }
}
