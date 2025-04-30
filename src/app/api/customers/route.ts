import { apiGet, apiPost } from "../database";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const query = `SELECT * from customers`;
  try {
    const result = await apiGet(query);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("GET /customers error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.membership_no) {
      return NextResponse.json(
        { error: "Membership number is required." },
        { status: 400 }
      );
    }
    
    const id = uuidv4();
    const query = `INSERT INTO customers (
        id, shop_id, name, membership_no, milk_supplied, fat_percentage, snf_percentage,
        adhaar, bank_name, branch_name, account_number, ifsc_code, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      id,
      body.shop_id ?? null,
      body.name,
      body.membership_no,
      body.milk_supplied,
      body.fat_percentage || 0,
      body.snf_percentage || 0,
      body.adhaar,
      body.bank_name,
      body.branch_name,
      body.account_number,
      body.ifsc_code,
      new Date().toISOString(), // sets created_at
    ];
    await apiPost(query, values);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
