import { NextRequest, NextResponse } from "next/server";
import { Customer } from "../../models/Customers";
import dbConnect from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }
) {
  try {
    const id  = await params['id'];
    const customer = await Customer.findById(id).lean();

    if (!customer) {
      return NextResponse.json({ error: "Customer not found" }, { status: 404 });
    }
    
    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  {params}
) {
  try {
    const id  = await params['id'];
    const body = await req.json();
    await dbConnect();
    const updated = await Customer.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return NextResponse.json({ error: "Customer not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true,  data: updated  }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
