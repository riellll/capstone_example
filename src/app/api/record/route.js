import { NextResponse } from "next/server";
import connect from "@/utils/db";
import MedRecords from "@/models/MedRecords";


export const GET = async (request) => {
  try {
    await connect();

    const rec = await MedRecords.find();

    return new NextResponse(JSON.stringify(rec), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newRec = new MedRecords(body);
   console.log(newRec);
  try {
    await connect();

    await newRec.save();

    return new NextResponse(newRec, { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error" + err, { status: 500 });
  }
};
