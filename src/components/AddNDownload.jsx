import React from "react";
import { downloadBillData } from "../api/shopdetailsApi";
import { Paperclip,Download } from 'lucide-react';

const AddNDownload = () => {
  const shop_id = localStorage.getItem("shopId");
  // Function to download the bill file
  const downloadBill = async () => {
    try {
      // Fetch the document from your backend
      const response = await downloadBillData(shop_id);
  
      // Create a Blob with the response data and specify the correct MIME type for .docx
      const docxBlob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  
      // Create a temporary link to trigger the download
      const tempLink = document.createElement("a");
  
      // Create an object URL for the Blob
      const url = URL.createObjectURL(docxBlob);
      tempLink.href = url;
  
      // Set the default filename for the download
      tempLink.setAttribute("download", "bill.docx");
  
      // Append the link to the document body, click it to trigger the download, and then remove it
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
  
      // Clean up the object URL after the download is triggered
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading DOCX:", error);
    }
  };
  

  // Example usage

  return (
    <div className="flex flex-row gap-x-2">
      <div
        className="w-1/2  h-[7vh] border-2 border-green-400 p-2 rounded-xl flex justify-center items-center gap-x-3"
      >
        Add User <Paperclip />
      </div>
      <div
        onClick={downloadBill}
        className="w-1/2 border-2 h-[7vh]  border-green-400 p-2 rounded-xl flex justify-center items-center gap-x-3"
      >
        Download <Download />
      </div>
    </div>
  );
};

export default AddNDownload;
