import { NextResponse } from "next/server";
import { fetchEveryTransaction } from "@/app/lib/data";

export async function GET() {
    try {
        const data = await fetchEveryTransaction();
        if (data) {
            return NextResponse.json(data);
        } else {
            return NextResponse.json({
                status: 404,
                error: 'No data found'
            });
        }
    } catch (error) {
        console.error("An error occurred: ", error);
        return NextResponse.json({
            status: 500,
            error: 'Failed to fetch data'
        });
    }
}