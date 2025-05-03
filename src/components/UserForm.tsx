// import { useFormik } from "formik";
import { UserInfo } from "@/lib/types";
import { useFormik } from "formik";
import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  createCustomer,
  getCustomers,
  updateCustomer,
} from "@/api/customerApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux.hooks";
import {
  updateCounter,
  updateCustomerList,
} from "@/redux/actions/customerSlice";

interface IUserFormProps {
  userInfo?: UserInfo;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserForm: FC<IUserFormProps> = ({ userInfo, setShowModal }) => {
  //call api for details fetch here
  const shopId = useAppSelector((state) => state.shopInfo.shop._id);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: userInfo?.name ?? "",
      membership_no: userInfo?.membership_no ?? "",
      milk_supplied: userInfo?.milk_supplied ?? "",
      total_qty_milk_supplied: userInfo?.total_qty_milk_supplied ?? "",
      fat_percentage: userInfo?.fat_percentage ?? "",
      snf_percentage: userInfo?.snf_percentage ?? "",
      adhaar: userInfo?.adhaar ?? "",
      bank_name: userInfo?.bank_name ?? "",
      branch_name: userInfo?.branch_name ?? "",
      account_number: userInfo?.account_number ?? "",
      ifsc_code: userInfo?.ifsc_code ?? "",
      shop_id: shopId,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (userInfo) {
        updateCustomer(userInfo?._id ?? "", values)
          .then(() => {
            setShowModal(false);
            getCustomers()
              .then((res) => {
                dispatch(updateCustomerList({ customerList: res ?? [] }));
                const milkSuppliedCount = res?.reduce(
                  (total: number, customer: UserInfo) => {
                    return total + parseFloat(customer?.milk_supplied || "0");
                  },
                  0
                );
                dispatch(
                  updateCounter({
                    customerCount: res?.length,
                    milkSuppliedCount,
                  })
                );
              })
              .catch(() => {});
          })
          .catch(() => {});
      } else {
        createCustomer(values)
          .then(() => {
            setShowModal(false);
            getCustomers()
              .then((res) => {
                dispatch(updateCustomerList({ customerList: res ?? [] }));
                const milkSuppliedCount = res?.reduce(
                  (total: number, customer: UserInfo) => {
                    return total + parseFloat(customer?.milk_supplied || "0");
                  },
                  0
                );
                dispatch(
                  updateCounter({
                    customerCount: res?.length,
                    milkSuppliedCount,
                  })
                );
              })
              .catch(() => {});
          })
          .catch(() => {});
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-y-1 overflow-y-auto max-h-[80vh] sm:w-[60vw] 2xl:w-[40vw] w-[80vw] p-1"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex flex-col sm:flex-row w-full gap-x-4">
        <div className="sm:w-1/2 w-full">
          <span className="text-sm">Name</span>
          <Input
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div className="sm:w-1/2 w-full">
          <span className="text-sm">Membership No.</span>
          <Input
            placeholder="Membership No"
            name="membership_no"
            value={formik.values.membership_no}
            onChange={formik.handleChange}
            type="number"
            disabled={!!userInfo?._id}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-x-4">
        <div className="sm:w-1/2 w-full">
          <span className="text-sm">Milk supplied(No of)</span>
          <Input
            placeholder="Milk supplied(No of)"
            name="milk_supplied"
            value={formik.values.milk_supplied}
            onChange={formik.handleChange}
            type="number"
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <span className="text-sm"> Total Qty Of Milk Supplied</span>
          <Input
            placeholder="Total Quantity of Milk supplied"
            name="total_qty_milk_supplied"
            value={formik.values.total_qty_milk_supplied}
            onChange={formik.handleChange}
            type="number"
          />
        </div>
      </div>
      <span>Average</span>
      <div className="flex flex-col sm:flex-row w-full gap-x-4">
        <div className="sm:w-1/2 w-full">
          <span className="text-sm">Fat%</span>
          <Input
            placeholder="Fat%"
            name="fat_percentage"
            value={formik.values.fat_percentage}
            onChange={formik.handleChange}
            type="number"
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <span className="text-sm">SNF%</span>
          <Input
            placeholder="SNF%"
            name="snf_percentage"
            value={formik.values.snf_percentage}
            onChange={formik.handleChange}
            type="number"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-x-4">
        <div className="sm:w-1/2 w-full">
          <span className="text-sm">AADHAR NO.</span>
          <Input
            placeholder="AADHAR NO"
            name="adhaar"
            value={formik.values.adhaar}
            onChange={formik.handleChange}
            type="number"
          />
        </div>

        <div className="sm:w-1/2 w-full">
          <span className="text-sm">Name of the bank</span>
          <Input
            placeholder="Name of the bank"
            name="bank_name"
            value={formik.values.bank_name}
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <span className="text-sm">Account Number</span>
      <Input
        placeholder="Account Number"
        name="account_number"
        value={formik.values.account_number}
        onChange={formik.handleChange}
        type="number"
      />
      <div className="flex flex-col sm:flex-row w-full gap-x-4">
        <div className="sm:w-1/2 w-full">
          <span className="text-sm">Branch Name</span>
          <Input
            placeholder="Branch Name"
            name="branch_name"
            value={formik.values.branch_name}
            onChange={formik.handleChange}
          />
        </div>

        <div className="sm:w-1/2 w-full">
          <span className="text-sm">IFSC Code</span>
          <Input
            placeholder="IFSC Code"
            name="ifsc_code"
            value={formik.values.ifsc_code}
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <Button className="mt-2" type="submit">
        Update Details
      </Button>
    </form>
  );
};

export default UserForm;
