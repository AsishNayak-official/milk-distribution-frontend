import dbConnect from "@/lib/db";
import { UserInfo } from "@/lib/types";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { NextResponse } from "next/server";
import { Customer } from "../models/Customers";
import { Shop } from "../models/Shop";

export async function GET() {
  try {
    await dbConnect;

    const shop = await Shop.findOne().lean();
    const rawCustomers = await Customer.find().lean();

    const customers: UserInfo[] = rawCustomers.map((cust: any) => ({
      name: cust.name ?? "",
      membership_no: cust.membership_no ?? "",
      milk_supplied: cust.milk_supplied ?? "",
      total_qty_milk_supplied: cust.total_qty_milk_supplied ?? "",
      fat_percentage: cust.fat_percentage ?? "",
      snf_percentage: cust.snf_percentage ?? "",
      adhaar: cust.adhaar ?? "",
      bank_name: cust.bank_name ?? "",
      branch_name: cust.branch_name ?? "",
      account_number: cust.account_number ?? "",
      ifsc_code: cust.ifsc_code ?? "",
    }));

    const doc = new jsPDF({
      orientation: "landscape",
      unit: "cm",
      format: "a4",
    });

    const PAGE_ROWS = 18;

    // Function to draw the header section
    const drawHeader = () => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");

      doc.setTextColor(0, 102, 204);
      doc.text("CASH INCENTIVE TO OMFED DAIRY FARMERS", 14.85, 2, {
        align: "center",
      });
      doc.setDrawColor(0, 0, 255);
      const textWidth = doc.getTextWidth(
        "CASH INCENTIVE TO OMFED DAIRY FARMERS"
      );
      const centerX = 14.85; // Half of landscape A4 (29.7 cm / 2)
      const startX = centerX - textWidth / 2;
      const endX = centerX + textWidth / 2;
      const underlineY = 2.12; // Slightly below the text
      doc.setDrawColor(0, 102, 204);
      doc.setLineWidth(0.05);
      doc.line(startX, underlineY, endX, underlineY);
      doc.setTextColor(0, 0, 0);
      doc.setDrawColor(0, 0, 0);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Society Name: - ${shop?.[0].society_name}`, 3, 3);
      doc.text(`Society Code: - ${shop?.[0].society_code}`, 13, 3);
      doc.text(`Unit: - ${shop?.[0].unit}`, 25, 3);
      doc.text(`Month:-   ${shop?.[0].month}`, 2, 3.7);
      const startDate = new Date(shop?.[0].start_bill_date).toLocaleDateString(
        "en-GB"
      ); // DD/MM/YYYY
      const endDate = new Date(shop?.[0].end_bill_date).toLocaleDateString(
        "en-GB"
      );
      doc.text(
        `Milk Bill Period From:-  ${startDate}   To   ${endDate}`,
        10,
        3.7
      );

      doc.setFontSize(9);
      doc.text("FILL ALL THE INFORMATION IN CAPITAL LETTER", 28.5, 4.2, {
        align: "right",
      });
    };

    // Function to draw the footer section
    const drawFooter = (finalY: number) => {
      doc.setFontSize(10);
      doc.text("Prepared by", 1, finalY + 1.2);
      doc.text("Certified by", 14, finalY + 1.2);
      doc.text("Countersigned by", 25, finalY + 1.2);
      doc.text("Secretary", 1, finalY + 2.5);
      doc.text("President             MC Member-1", 13, finalY + 2.5);
      doc.text("MC Member             Route Supervisor", 22, finalY + 2.5);
    };

    // Split customers into pages
    const pages: UserInfo[][] = [];
    for (let i = 0; i < customers.length; i += PAGE_ROWS) {
      const chunk: UserInfo[] = customers.slice(i, i + PAGE_ROWS);
      while (chunk.length < PAGE_ROWS) {
        chunk.push({} as UserInfo); // Fill with empty rows if fewer than 15
      }
      pages.push(chunk);
    }

    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      if (pageIndex > 0) doc.addPage();
      drawHeader();

      autoTable(doc, {
        startY: 4.3,
        margin: { left: 0.9 },
        theme: "grid",
        head: [
          [
            { content: "S.N", rowSpan: 2 },
            { content: "Name of the Functional Members", rowSpan: 2 },
            { content: "Membership No.", rowSpan: 2 },
            { content: "Milk Supplied (No of)", rowSpan: 2 },
            { content: "Total Qty of Milk Supplied", rowSpan: 2 },
            { content: "Average", colSpan: 2 },
            { content: "AADHAR NO.", rowSpan: 2 },
            { content: "Name of the Bank in Full", rowSpan: 2 },
            { content: "Branch Name", rowSpan: 2 },
            { content: "Account No.", rowSpan: 2 },
            { content: "IFSC Code", rowSpan: 2 },
          ],
          [{ content: "Fat%" }, { content: "SNF%" }],
        ],
        body: pages[pageIndex].map((cust: UserInfo, idx: number) => [
          idx + 1 + pageIndex * PAGE_ROWS,
          (cust.name || "").toUpperCase(),
          cust.membership_no || "",
          cust.milk_supplied || "",
          cust.total_qty_milk_supplied || "",
          cust.fat_percentage || "",
          cust.snf_percentage || "",
          cust.adhaar || "",
          (cust.bank_name || "").toUpperCase(),
          (cust.branch_name || "").toUpperCase(),
          cust.account_number || "",
          (cust.ifsc_code || "").toUpperCase(),
        ]),
        columnStyles: {
          0: { cellWidth: 1 }, // S.N
          1: { cellWidth: 4 }, // Name
          2: { cellWidth: 1.5 }, // Membership No.
          3: { cellWidth: 1.5 }, // Milk Supplied
          4: { cellWidth: 2 }, // Total Qty
          5: { cellWidth: 1.2 }, // Fat%
          6: { cellWidth: 1.2 }, // SNF%
          7: { cellWidth: 2.5 }, // Aadhar
          8: { cellWidth: 4 }, // Bank Name
          9: { cellWidth: 3 }, // Branch Name
          10: { cellWidth: 3 }, // Account No.
          11: { cellWidth: 3 }, // IFSC
        },
        alternateRowStyles: {
          valign: "middle",
          halign: "center",
        },
        styles: {
          fontSize: 8,
          lineColor: [0, 0, 0],
          lineWidth: 0.02,
          valign: "middle",
          halign: "center",
          textColor: 0,
        },
        headStyles: {
          fillColor: [255, 255, 255],
          lineWidth: 0.02,
          fontStyle: "normal",
          lineColor: [0, 0, 0],
          cellPadding: 0.2,
        },
        bodyStyles: {
          lineColor: [0, 0, 0],
          lineWidth: 0.02,
          cellPadding: 0.1,
        },
        didDrawPage: (data) => {
          drawFooter(data?.cursor?.y ?? 0);
        },
      });
    }

    const pdfBytes = doc.output("arraybuffer");
    return new Response(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=shop_customer_report.pdf",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
