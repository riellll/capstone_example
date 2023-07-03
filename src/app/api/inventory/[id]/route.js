import Inventory from "@/models/Inventory";
import connect from "@/utils/db";
import { NextResponse } from "next/server";



export const GET = async (request, { params }) => {
    const id = params.id;
  try {
    await connect();

    const inv = await Inventory.findById(id);

    return new NextResponse(JSON.stringify(inv), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const DELETE = async (request, { params }) => {
    const id = params.id;
  try {
    await connect();

    await Inventory.findByIdAndDelete(id);

    return new NextResponse('ok', { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const PUT = async (request, { params }) => {
    const id = params.id;

    const body = await request.json();
  
    // const update = new Inventory(body);
    // const a = body.medicine_name
    // console.log(a);
  try {
    await connect();

    await Inventory.findByIdAndUpdate(id, {
    medicine_name: body.medicine_name,
    release_date: body.release_date,
    dosage: body.dosage,
    expiration_date: body.expiration_date});

    return new NextResponse('ok', { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
