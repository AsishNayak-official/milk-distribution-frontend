import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
        CREATE TABLE IF NOT EXISTS shop (
          id TEXT PRIMARY KEY,
          society_name TEXT,
          society_code TEXT,
          unit TEXT,
          month TEXT,
          start_bill_date TEXT,
          end_bill_date TEXT,
          created_at TEXT
        );
    `,
      (err: Error) => {
        if (err) console.error("Shops Table Error:", err.message);
        else console.log("Shops table created successfully.");
      }
    );

    // Users table
    db.run(
      `
        CREATE TABLE IF NOT EXISTS customers (
          id TEXT PRIMARY KEY,
          shop_id TEXT,
          name TEXT,
          membership_no INTEGER,
          milk_supplied REAL,
          total_qty_milk_supplied REAL,
          fat_percentage REAL,
          snf_percentage REAL,
          adhaar TEXT,
          bank_name TEXT,
          branch_name TEXT,
          account_number TEXT,
          ifsc_code TEXT,
          created_at TEXT,
          FOREIGN KEY (shop_id) REFERENCES shops(id)
        );
      `,
      (err: Error) => {
        if (err) console.error("Users Table Error:", err.message);
        else console.log("Users table created successfully.");
      }
    );
  });
};
