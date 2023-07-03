import Student from "@/models/Students";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();

    const allStudent = await Student.find();

    return new NextResponse(JSON.stringify(allStudent), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
