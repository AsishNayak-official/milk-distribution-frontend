// /src/app/api/seeds.ts
import dbConnect from "@/lib/db";
import { Shop } from "./models/Shop";
import { Customer } from "./models/Customers";
import dayjs from "dayjs";

export const clearShops = async () => {
  await dbConnect();
  await Shop.deleteMany({});
  console.log("Shops collection cleared");
};

export const clearCustomers = async () => {
  await dbConnect();
  await Customer.deleteMany({});
  console.log("Customers collection cleared");
};

export const seedShops = async () => {
  await dbConnect();

  const shopData = new Shop({
    society_name: "OMM SAI WMPCS",
    society_code: "MA346",
    unit: "MAHANGA",
    month: dayjs().format("MMMM"),
    start_bill_date: new Date().toISOString(),
    end_bill_date: new Date().toISOString(),
    created_at: new Date().toISOString(),
  });

  await shopData.save();
  console.log("Shop seeded:", shopData._id);
};
