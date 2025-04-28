import { NextRequest, NextResponse } from "next/server";
import { apiPatch } from "../../database";

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const fields = Object.keys(body)
      .filter((key) => key !== "id")
      .map((key) => `${key} = ?`)
      .join(", ");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const values: any[] = Object.keys(body)
      .filter((key) => key !== "id")
      .map((key) => body[key]);

    values.push(id);
    const query = `UPDATE shop SET ${fields} WHERE id = ?`;
    await apiPatch(query, values);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
