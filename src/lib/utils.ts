import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface UserInfo {
  id:string;
  name: string;
  membership_no: string;
  milk_supplied: string;
  fat_percentage: string;
  snf_percentage: string;
  adhaar: string;
  bank_name: string;
  branch_name: string;
  account_number: string;
  ifsc_code: string;
}

