// models/Shop.ts
import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  society_name: String,
  society_code: String,
  unit: String,
  month: String,
  start_bill_date: String,
  end_bill_date: String,
  created_at: { type: String, default: new Date().toISOString() }
});

export const Shop = mongoose.models.Shop || mongoose.model("Shop", shopSchema);
