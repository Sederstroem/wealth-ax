import { accounts } from '@/app/lib/placeholder-data';
import { NextResponse } from "next/server";

async function GET(req: Request, context: never) {
    const { params } = context;
    const account = accounts.filter((x) => params.id === x.id.toString());

    return NextResponse.json({
        account
    });
}

export { GET }