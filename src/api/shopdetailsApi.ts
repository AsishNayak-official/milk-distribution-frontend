// utils/shopApi.ts
import axios from "@/lib/axios";

// GET shop details
export const getShopDetails = async () => {
  const res = await axios.get("/shop");
  return res.data;
};

export const updateStartDate = async (id: string, start_bill_date: string,month:string) => {
  const res = await axios.patch(`/shop/${id}`, {start_bill_date,month});
  return res.data;
};
export const updateEndDate = async (id: string, end_bill_date: string) => {
  const res = await axios.patch(`/shop/${id}`, {end_bill_date});
  return res.data;
};


export const downloadPDF = async () => {
  try {
    const res = await fetch("/api/download-report");

    if (!res.ok) {
      throw new Error("Failed to download PDF");
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "report.pdf";
    link.click();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("PDF Download Error:", error);
  }
};
