import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { Shop } from "../../models/Shop";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect();

    const id = params['id']; 
    const body = await req.json(); 

    const updatedShop = await Shop.findByIdAndUpdate(id, body, { new: true });

    if (!updatedShop) {
      return NextResponse.json({ error: 'Shop not found' }, { status: 400 });
    }

    // Return the updated shop document
    return NextResponse.json({ success: true, data: updatedShop }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
