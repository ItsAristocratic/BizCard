import { SchemaCreated } from "@/lib/model/schemaModel";
import { connectionSrt } from "@/lib/mongoDB";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data = [];
    let success = true;
    try {
        await mongoose.connect(connectionSrt);
        data = await SchemaCreated.find();
        console.log(data);
        
    } catch (error) {
        console.error("Error fetching data:", error);
        success = false;
        data = [];
      }
      return NextResponse.json({result:data, success})
}
export async function POST(req){
    const payload = await req.json()
    await mongoose.connect(connectionSrt);
    const businessDetails = new SchemaCreated(payload)
    const data = await businessDetails.save()
    return NextResponse.json({ data, success: true })
}