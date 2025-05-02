// app/api/seed/route.ts
import { seedShops, clearShops, clearCustomers } from '../seeds';

export async function GET() {
  await clearShops();
  await clearCustomers();
  await seedShops();

  return Response.json({ message: 'Seeded successfully' });
}
