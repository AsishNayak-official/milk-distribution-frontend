export interface UserInfo {
    id?:string;
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

export interface ShopInfo {
    id: string;
    society_name: string;
    society_code: string;
    unit: string;
    month: string;
    start_bill_date: string;
    end_bill_date: string;
    created_at: string;
}
  