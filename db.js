import { JSONFilePreset } from "lowdb/node";

const defaultData = { items: [] };

let db;

export async function getDb() {
  if (!db) {
    db = await JSONFilePreset("db.json", defaultData);
  }
  return db;
}
