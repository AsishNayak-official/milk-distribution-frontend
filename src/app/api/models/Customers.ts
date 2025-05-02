// models/Customer.ts
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  shop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop' },
  name: String,
  membership_no: Number,
  milk_supplied: Number,
  total_qty_milk_supplied: Number,
  fat_percentage: Number,
  snf_percentage: Number,
  adhaar: String,
  bank_name: String,
  branch_name: String,
  account_number: String,
  ifsc_code: String,
  created_at: { type: String, default: new Date().toISOString() }
});

export const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema);
