import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";




export const GET = async (req) => {
    try {
      await connect();
      const allUser = await User.find();
  
      return new NextResponse(JSON.stringify(allUser), { status: 200 });
    } catch (error) {
      console.log(error);
      return new NextResponse("Database Error" + error, { status: 500 });
    }
  };
  
  export const POST = async (request) => {
    const body = await request.json();
  
    const newUser = new User(body);
    console.log(newUser);
    try {
      await connect();
      await newUser.save();
  
      return new NextResponse(newUser, { status: 200 });
    } catch (error) {
      console.log(error);
      return new NextResponse("Database Error" + error, { status: 500 });
    }
  };