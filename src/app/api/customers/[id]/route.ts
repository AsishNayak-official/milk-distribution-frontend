import { NextRequest, NextResponse } from "next/server";
import { apiGet, apiPatch } from "../../database";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const query = `SELECT * FROM customers WHERE id = ?`;
    const result = await apiGet(query.replace("?", `'${context.params.id}'`));
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const fields = Object.keys(body)
      .filter((key) => key !== "id")
      .map((key) => `${key} = ?`)
      .join(", ");
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const values: any[] = Object.keys(body)
      .filter((key) => key !== "id")
      .map((key) => body[key]);


    values.push(context.params.id);
    const query = `UPDATE customers SET ${fields} WHERE id = ?`;
    await apiPatch(query, values);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
