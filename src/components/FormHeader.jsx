import React from "react";
import { Input } from "@chakra-ui/react";
import dayjs from "dayjs";

const FormHeader = () => {
  return (
    <div className="flex flex-col gap-y-1 border-2 rounded-[10px] border-green-400 p-2">
      <p className="underline font-semibold text-center">
        CASH INCENTIVE TO OMFED DIARY FARMERS
      </p>
      <div className="sm:flex sm:flex-row sm:justify-around">
        <p>Society Name : OMM SAI WMPCS</p>
        <p>Society Code : MA346</p>
        <p>Unit : MAHANGA</p>
      </div>
      <div className="sm:flex sm:flex-row sm:items-center sm:justify-around">
          <p>Month : {dayjs("2025-07-01").format("MMMM").toUpperCase()}</p>
        <div className="flex flex-col sm:flex-row">
          <p>Milk bill Period From : </p>
          <div className="flex flex-row gap-x-3 items-center">
            <Input type="date" className="w-1/2" />
            To
            <Input type="date" className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
