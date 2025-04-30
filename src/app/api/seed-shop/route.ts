import { seedShops } from "@/app/api/seeds";

export async function GET() {
  try {
    seedShops();
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}