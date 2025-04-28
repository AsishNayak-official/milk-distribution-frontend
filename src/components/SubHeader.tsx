import { updateEndDate, updateStartDate } from "@/api/shopdetailsApi";
import { ShopInfo } from "@/lib/types";
import { useAppSelector } from "@/redux/hooks/redux.hooks";
import { RootState } from "@/redux/store";
import dayjs from "dayjs";
import { ChartSpline, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { DatePicker } from "./DatePicker";
import EditCustomerInformation from "./EditCustomerInformation";

const SubHeader = () => {
  const shopInfo: ShopInfo = useAppSelector(
    (state: RootState) => state.shopInfo.shop
  );
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [showModal, setShowModal] = useState<boolean>(false);


  useEffect(() => {
    setStartDate(dayjs(shopInfo.start_bill_date).toDate());
    setEndDate(dayjs(shopInfo.end_bill_date).toDate());
  }, [shopInfo]);

  const handleStartDateChange = () => {
    if (startDate) {
      updateStartDate(shopInfo.id, startDate.toISOString())
        .then(() => {})
        .catch(() => {});
    }
  };
  const handleEndDateChange = () => {
    if (endDate) {
      updateEndDate(shopInfo.id, endDate.toISOString())
        .then(() => {})
        .catch(() => {});
    }
  };
  return (
    <div className="flex sm:flex-row flex-col justify-between gap-x-10 gap-y-5 sm:gap-y-0">
      <div className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative">
        <DatePicker
          date={startDate}
          setDate={setStartDate}
          className={"absolute right-5"}
          onBlur={handleStartDateChange}
        />
        <span className="text-sm">Star Date</span>
        <span className="text-2xl">
          {dayjs(startDate).format("DD MMM YYYY")}
        </span>
        <span className="text-sm text-gray-500">
          {dayjs(startDate).format("dddd, D MMMM YYYY")}
        </span>
      </div>
      <div className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative">
        <DatePicker
          date={endDate}
          setDate={setEndDate}
          className={"absolute right-5"}
          onBlur={handleEndDateChange}
        />
        <span className="text-sm">End Date</span>
        <span className="text-2xl">{dayjs(endDate).format("DD MMM YYYY")}</span>
        <span className="text-sm text-gray-500">
          {dayjs(endDate).format("dddd, D MMMM YYYY")}
        </span>
      </div>
      <div className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative">
        <ChartSpline className={"absolute right-5"} />
        <span className="text-sm">Total Collection</span>
        <span className="text-2xl">07,2025</span>
        <span className="text-sm text-gray-500">
          Cost estimation around $2025(approx)
        </span>
      </div>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative"
      >
        <Users className={"absolute right-5"} />
        <span className="text-sm">Add Customer</span>
        <span className="text-2xl">2025</span>
        <span className="text-sm text-gray-500">Click to add new customer</span>
      </div>
      {showModal && (
        <EditCustomerInformation
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default SubHeader;
