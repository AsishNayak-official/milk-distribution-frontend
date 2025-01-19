import { Input } from "@chakra-ui/react";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getShopDetails, updateBillDate } from "../api/shopdetailsApi";

const FormHeader = () => {
  const [shopDetails, setShopDetails] = useState();
  const [updatedStartDate, setUpdatedStartDate] = useState("");
  const [updatedEndDate, setUpdatedEndDate] = useState("");
  const [updatedMonth, setUpdatedMonth] = useState("");

  useEffect(() => {
    getShopDetails()
      .then((res) => {
        setShopDetails(res?.data);
        setUpdatedStartDate(res?.data?.start_bill_date);
        setUpdatedEndDate(res?.data?.end_bill_date);
        setUpdatedMonth(res?.data?.month);
      })
      .catch((err) => {});
  }, []);

  const handleStartDateChange = (e) => {
    setUpdatedStartDate(e?.target?.value);
    setUpdatedMonth(dayjs(e?.target?.value).format("MMMM").toUpperCase());
  }

  // Handler to update the end date
  const handleEndDateChange = (e) => {
    setUpdatedEndDate(e.target.value);
  }

    const updateDate = async () => {
      try{
        const response = await updateBillDate(shopDetails?.id,updatedMonth,updatedStartDate,updatedEndDate)
        console.log({res: response.data})
      }
      catch{

      }
    };

  return (
    <div className="flex flex-col gap-y-1 border-2 rounded-[10px] border-green-400 p-2">
      <p className="underline font-semibold text-center">
        CASH INCENTIVE TO OMFED DIARY FARMERS
      </p>
      <div className="sm:flex sm:flex-row sm:justify-around">
        <p>Society Name : {shopDetails?.society_name}</p>
        <p>Society Code : {shopDetails?.society_code}</p>
        <p>Unit : {shopDetails?.unit}</p>
      </div>
      <div className="sm:flex sm:flex-row sm:items-center sm:justify-around">
        {/* <p>Month : {dayjs("2025-07-01").format("MMMM").toUpperCase()}</p> */}
        <p>Month : {updatedMonth.toUpperCase()}</p>
        <div className="flex flex-col sm:flex-row">
          <p>Milk bill Period From : </p>
          <div className="flex flex-row gap-x-3 items-center">
            <Input
              type="date"
              className="w-1/2"
              value={updatedStartDate}
              onChange={handleStartDateChange}
              onBlur={updateDate}
            />
            To
            <Input
              type="date"
              className="w-1/2"
              value={updatedEndDate}
              onChange={handleEndDateChange}
              onBlur={updateDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
