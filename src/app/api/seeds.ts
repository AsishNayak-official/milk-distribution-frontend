// /src/app/api/seeds.ts
import { db } from "./database";
import { v4 as uuidv4 } from "uuid";

const getCurrentMonth = (): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthIndex = new Date().getMonth(); // getMonth() returns 0-11 for months
  return months[currentMonthIndex];
};

export const clearShops = () => {
    db.serialize(() => {
      const deleteQuery = `DELETE FROM shop`;
  
      db.run(deleteQuery, (err) => {
        if (err) {
          console.error("Error clearing shop table:", err.message);
        } else {
          console.log("Shop table cleared successfully.");
        }
      });
    });
  };
export const clearCustomers = () => {
    db.serialize(() => {
      const deleteQuery = `DELETE FROM customers`;
  
      db.run(deleteQuery, (err) => {
        if (err) {
          console.error("Error clearing customers table:", err.message);
        } else {
          console.log("customers table cleared successfully.");
        }
      });
    });
  };

export const seedShops = () => {
  db.serialize(() => {
    const insertQuery = `INSERT INTO shop (
      id, society_name, society_code, unit, month, start_bill_date, end_bill_date, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const shops = [
      {
        id: uuidv4(),
        society_name: "OMM SAI WMPCS",
        society_code: "MA346",
        unit: "MAHANGA",
        month: getCurrentMonth(),
        start_bill_date: new Date().toISOString(),
        end_bill_date: new Date().toISOString(),
        created_at: new Date().toISOString(),
      },
    ];

    // Insert shop data into the shop table
    shops.forEach((shop) => {
      const {
        id,
        society_name,
        society_code,
        unit,
        month,
        start_bill_date,
        end_bill_date,
        created_at,
      } = shop;
      db.run(
        insertQuery,
        [
          id,
          society_name,
          society_code,
          unit,
          month,
          start_bill_date,
          end_bill_date,
          created_at,
        ],
        (err) => {
          if (err) {
            console.error("Error inserting shop data:", err.message);
          } else {
            console.log(`Shop ${id} inserted successfully`);
          }
        }
      );
    });
  });
};
