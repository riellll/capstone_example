import Student from "@/models/Students";
import connect from "@/utils/db";

const { NextResponse } = require("next/server");

export const GET = async (request, { params }) => {
  const id = params.id;

  try {
    await connect();

    const oneStudent = await Student.findById(id);

    return new NextResponse(JSON.stringify(oneStudent), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
