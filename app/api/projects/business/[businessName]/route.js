// app/api/projects/business/[businessName]/route.js

import { SchemaCreated } from "@/lib/model/schemaModel";
import { connectionSrt } from "@/lib/mongoDB";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        // Extract businessName from params
        const { businessName } = params;

        console.log("Business Name Extracted: ", businessName);

        // Connect to MongoDB
        await mongoose.connect(connectionSrt);

        // Format the businessName if needed (e.g., replace underscores with spaces)
        const formattedBusinessName = businessName
        ? businessName.replace(/_/g, ' ').trim().replace(/\n/g, '')
        : '';
        console.log("formated to", typeof formattedBusinessName )
        // Find business by formatted name
        const finalFind = { businessName: formattedBusinessName };
        console.log(finalFind)
        const data = await SchemaCreated.findOne(finalFind);
        console.log(data)

        if (data) {
            return NextResponse.json({ data }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Business not found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching business:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
