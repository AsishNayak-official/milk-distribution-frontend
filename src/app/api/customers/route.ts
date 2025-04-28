import { apiGet, apiPost } from "../database";
import { NextRequest, NextResponse } from "next/server";


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
      const query = `INSERT INTO customers (name, membership_no, milk_supplied, fat_percentage, snf_percentage, adhaar, bank_name, branch_name, account_number, ifsc_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const values = [
        body.name,
        body.membership_no,
        body.milk_supplied,
        body.fat_percentage,
        body.snf_percentage,
        body.adhaar,
        body.bank_name,
        body.branch_name,
        body.account_number,
        body.ifsc_code,
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

  