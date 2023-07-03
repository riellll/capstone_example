import Employee from "@/models/Employee";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
  const id = params.id;

  try {
    await connect();

    const oneEmployee = await Employee.findById(id);

    return new NextResponse(JSON.stringify(oneEmployee), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
