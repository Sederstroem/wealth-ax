import { NextResponse } from "next/server";
import { accounts } from '../../lib/placeholder-data';

async function GET() {
    return NextResponse.json( { accounts, status: 200 });
}

export { GET }