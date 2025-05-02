import { NextRequest, NextResponse } from "next/server";
import { Customer } from "../models/Customers";
import dbConnect from "@/lib/db";

export async function GET() {
  try {
    await dbConnect();
    const customers = await Customer.find();
    return NextResponse.json(customers, { status: 200 });
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
    await dbConnect();
    if (!body.membership_no) {
      return NextResponse.json(
        { error: "Membership number is required." },
        { status: 400 }
      );
    }

    const customer = new Customer({
      shop_id: body.shop_id ?? null,
      name: body.name,
      membership_no: body.membership_no,
      milk_supplied: body.milk_supplied,
      fat_percentage: body.fat_percentage || 0,
      snf_percentage: body.snf_percentage || 0,
      adhaar: body.adhaar,
      bank_name: body.bank_name,
      branch_name: body.branch_name,
      account_number: body.account_number,
      ifsc_code: body.ifsc_code,
      created_at: new Date(),
    });
    await customer.save();
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
