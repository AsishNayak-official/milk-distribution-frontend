import { NextResponse } from "next/server";
import { apiGet } from "../database";

export async function GET() {
  try {
    const result = await apiGet("SELECT * FROM shop");
    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

