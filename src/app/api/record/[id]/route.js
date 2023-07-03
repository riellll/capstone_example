import { NextResponse } from "next/server";
import connect from "@/utils/db";
import MedRecords from "@/models/MedRecords";

export const GET = async (request, { params }) => {
  const id = params.id;
  try {
    await connect();

    const record = await MedRecords.findById(id)
      .populate("patient_id")
      .populate("employee_id")
      .populate("medicine_id");

    return new NextResponse(JSON.stringify(record), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error" + err, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const id = params.id;
  try {
    await connect();

    await MedRecords.findByIdAndDelete(id);

    return new NextResponse("ok", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const id = params.id;

  const body = await request.json();

  const update = new MedRecords(body);
  // const a = body.medicine_name
  console.log(body);
  try {
    await connect();

    await MedRecords.findByIdAndUpdate(id, body);

    return new NextResponse("ok", { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error" + err, { status: 500 });
  }
};
