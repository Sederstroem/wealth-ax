// /api/balances route
import { fetchIndividualBalance } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await fetchIndividualBalance();
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
