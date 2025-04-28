import path from "path";
import sqlite3 from "sqlite3";

const dbPath = path.join(process.cwd(), "diary.db");
export const db = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the diary database.");
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiGet = async <T = any>(query: string): Promise<T[]> => {
  return await new Promise((resolve, reject) => {
    db.all(query, (err: Error | null, rows: T[]) => {
      if (err) {
        console.error("GET error:", err);
        return reject(err);
      }
      resolve(rows);
    });
  });
};

export const apiPost = async (query: string, values: string[]) => {
  return await new Promise((resolve, reject) => {
    db.run(query, values, function (err) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(null);
    });
  });
};

export const apiDelete = async (query: string, values: string[]) => {
  return await new Promise((resolve, reject) => {
    db.run(query, values, function (err) {
      if (err) {
        console.log("DELETE error:", err);
        return reject(err);
      }
      resolve(null);
    });
  });
};

export const apiPatch = async (query: string, values: string[]) => {
  return await new Promise((resolve, reject) => {
    db.run(query, values, function (err) {
      if (err) {
        console.log("PATCH error:", err);
        return reject(err);
      }
      resolve(null);
    });
  });
};
