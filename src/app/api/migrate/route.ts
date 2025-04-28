import { migrate } from "../migrations";

export async function GET() {
    try {
      migrate(); // Make sure this runs only once in production
      return Response.json({ success: true });
    } catch (error) {
      return Response.json({ error: (error as Error).message }, { status: 500 });
    }
  }