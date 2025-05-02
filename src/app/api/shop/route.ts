// app/api/shop/route.ts

import { NextResponse } from 'next/server';
import  dbConnect from '@/lib/db';
import { Shop } from '../models/Shop';

export async function GET() {
  try {
    await dbConnect();
    
    const result = await Shop.find().lean(); // .lean() gives plain JS objects
    return NextResponse.json(result[0], { status: 200 }); // Return the first shop
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
