import Inventory from "@/models/Inventory";
import connect from "@/utils/db";
import { NextResponse } from "next/server";



export const GET = async (request) => {

    try {
      await connect();
  
      const inv = await Inventory.find();
  
      return new NextResponse(JSON.stringify(inv), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };


export const POST = async (request) => {
    const body = await request.json();
  
    const newInv = new Inventory(body);

    try {
      await connect();
  
      await newInv.save();
  
      return new NextResponse(newInv, { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse("Database Error", { status: 500 });
    }
  };