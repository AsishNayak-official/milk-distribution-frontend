import { clearShops } from "@/app/api/seeds";

export async function GET() {
  try {
    clearShops();
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}