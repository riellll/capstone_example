import Event from "@/models/Event";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    //fetch 
     try {
        await connect();
        const events = await Event.find();
        return new NextResponse(JSON.stringify(events), { status: 200 });
    } catch (error) {
        return new NextResponse("Database error");
    } 

    //return new NextResponse('It works!', {status: 200})
    
}