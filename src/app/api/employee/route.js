
import Employee from "@/models/Employee";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request) => {

  
    try {
      await connect();
  
      const allEmployee = await Employee.find();
  
      return new NextResponse(JSON.stringify(allEmployee), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
