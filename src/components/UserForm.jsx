import { Button, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";

const UserForm = ({disable=false,userInfo,shopId}) => {
  //call api for details fetch here

  const formik = useFormik({
    initialValues: {
      name: userInfo?.name ?? "",
      membershipNo: userInfo?.membership_no??"",
      milkSupplied: userInfo?.total_qty_milk_supplied??"",
      fatPercentage: userInfo?.fat_percentage??"",
      snfPercentage: userInfo?.snf_percentage??"",
      aadharNumber: userInfo?.adhaar??"",
      bankName: userInfo?.bank_name??"",
      branchName: userInfo?.branch_name??"",
      accountNumber: userInfo?.account_number??"",
      ifscCode: userInfo?.ifsc_code??"",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Form Values: ", values);
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
        name="membershipNo"
        value={formik.values.membershipNo}
        onChange={formik.handleChange}
      />

      <p>Milk supplied (No of)</p>
      <Input
        variant="filled"
        placeholder="Milk supplied (No of)"
        name="milkSupplied"
        value={formik.values.milkSupplied}
        onChange={formik.handleChange}
      />

      <p>Average</p>
      <div className="flex flex-row w-full gap-x-1">
        <div className="w-1/2">
          <p>Fat%</p>
          <Input
            variant="filled"
            placeholder="Fat%"
            name="fatPercentage"
            value={formik.values.fatPercentage}
            onChange={formik.handleChange}
          />
        </div>
        <div className="w-1/2">
          <p>SNF%</p>
          <Input
            variant="filled"
            placeholder="SNF%"
            name="snfPercentage"
            value={formik.values.snfPercentage}
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <p>AADHAR NO.</p>
      <Input
        variant="filled"
        placeholder="AADHAR NO"
        name="aadharNumber"
        value={formik.values.aadharNumber}
        onChange={formik.handleChange}
      />

      <p>Name of the bank</p>
      <Input
        variant="filled"
        placeholder="Name of the bank"
        name="bankName"
        value={formik.values.bankName}
        onChange={formik.handleChange}
      />

      <p>Branch Name</p>
      <Input
        variant="filled"
        placeholder="Branch Name"
        name="branchName"
        value={formik.values.branchName}
        onChange={formik.handleChange}
      />

      <p>Account Number</p>
      <Input
        variant="filled"
        placeholder="Account Number"
        name="accountNumber"
        value={formik.values.accountNumber}
        onChange={formik.handleChange}
      />

      <p>IFSC Code</p>
      <Input
        variant="filled"
        placeholder="IFSC Code"
        name="ifscCode"
        value={formik.values.ifscCode}
        onChange={formik.handleChange}
      />

        <Button colorScheme="teal" className="mt-2" type="submit">
          Update Details
        </Button>
    </form>
  );
};

export default UserForm;
