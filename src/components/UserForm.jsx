import { Button, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { updateUserInfo } from "../api/userDetailsApi";

const UserForm = ({disable=false,userInfo,shopId}) => {
  //call api for details fetch here

  const formik = useFormik({
    initialValues: {
      name: userInfo?.name ?? "",
      membership_no: userInfo?.membership_no??"",
      total_qty_milk_supplied: userInfo?.total_qty_milk_supplied??"",
      fat_percentage: userInfo?.fat_percentage??"",
      snf_percentage: userInfo?.snf_percentage??"",
      adhaar: userInfo?.adhaar??"",
      bank_name: userInfo?.bank_name??"",
      branch_name: userInfo?.branch_name??"",
      account_number: userInfo?.account_number??"",
      ifsc_code: userInfo?.ifsc_code??"",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if(userInfo){
        updateUserInfo(shopId,values,userInfo?.id)
        .then((res)=>{
          
        })
        .catch((err)=>{})
      }
      else{
        updateUserInfo(shopId,values)
        .then((res)=>{
      
        })
        .catch((err)=>{})
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-1 my-2">
      <p>Name</p>
      <Input
        variant="filled"
        placeholder="Name"
        disabled={disable}
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />

      <p>Membership No.</p>
      <Input
        variant="filled"
        disabled={disable }
        placeholder="Membership No"
        name="membership_no"
        value={formik.values.membership_no}
        onChange={formik.handleChange}
        type="number"
      />

      <p>Total Quantity of Milk supplied</p>
      <Input
        variant="filled"
        placeholder="Total Quantity of Milk supplied"
        name="total_qty_milk_supplied"
        value={formik.values.total_qty_milk_supplied}
        onChange={formik.handleChange}
        type="number"
      />

      <p>Average</p>
      <div className="flex flex-row w-full gap-x-1">
        <div className="w-1/2">
          <p>Fat%</p>
          <Input
            variant="filled"
            placeholder="Fat%"
            name="fat_percentage"
            value={formik.values.fat_percentage}
            onChange={formik.handleChange}
            type="number"
          />
        </div>
        <div className="w-1/2">
          <p>SNF%</p>
          <Input
            variant="filled"
            placeholder="SNF%"
            name="snf_percentage"
            value={formik.values.snf_percentage}
            onChange={formik.handleChange}
            type="number"
          />
        </div>
      </div>

      <p>AADHAR NO.</p>
      <Input
        variant="filled"
        placeholder="AADHAR NO"
        name="adhaar"
        value={formik.values.adhaar}
        onChange={formik.handleChange}
        type="number"
      />

      <p>Name of the bank</p>
      <Input
        variant="filled"
        placeholder="Name of the bank"
        name="bank_name"
        value={formik.values.bank_name}
        onChange={formik.handleChange}
      />

      <p>Branch Name</p>
      <Input
        variant="filled"
        placeholder="Branch Name"
        name="branch_name"
        value={formik.values.branch_name}
        onChange={formik.handleChange}
      />

      <p>Account Number</p>
      <Input
        variant="filled"
        placeholder="Account Number"
        name="account_number"
        value={formik.values.account_number}
        onChange={formik.handleChange}
        type="number"
      />

      <p>IFSC Code</p>
      <Input
        variant="filled"
        placeholder="IFSC Code"
        name="ifsc_code"
        value={formik.values.ifsc_code}
        onChange={formik.handleChange}
      />

        <Button colorScheme="teal" className="mt-2" type="submit">
          Update Details
        </Button>
    </form>
  );
};

export default UserForm;
