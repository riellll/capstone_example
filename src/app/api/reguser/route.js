import { NextResponse } from "next/server";
import connect from "@/utils/db";
import RegUser from "@/models/RegUser";

export const GET = async (req) => {
  try {
    await connect();
    const allUser = await RegUser.find();

    return new NextResponse(JSON.stringify(allUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error" + error, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newUser = new RegUser(body);
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
