import { RefreshCcw } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import SubHeader from "./SubHeader";
import SearchEditMilkData from "./SearchEditMilkData";
import OwnerInfo from "./ShopInfo";
import DownloadFile from "./DownloadFile";
import { clearCustomers } from "@/api/customerApi";
import { useAppDispatch } from "@/redux/hooks/redux.hooks";
import {
  clearCounter,
  updateCustomerList,
} from "@/redux/actions/customerSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const handleReset = () => {
    clearCustomers()
      .then(() => {
        dispatch(updateCustomerList({ customerList: [] }));
        dispatch(clearCounter());
      })
      .catch(() => {});
  };
  return (
    <div>
      {/* Navbar */}
      <div className="flex  sm:flex-row flex-col justify-between items-center shadow-md px-7 py-2 2xl:px-30 gap-y-2 sm:gap-y-0">
        <div className="flex flex-row gap-x-3">
          <span className="text-2xl font-semibold">Diary Management</span>
        </div>
        <div className="flex items-center gap-4 sm:flex-row flex-row-reverse">
          <RefreshCcw onClick={handleReset} />
          <Separator orientation="vertical" />
          <div className="flex flex-row items-center gap-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-y-0">
              <span className="leading-tight">
                asish.nayak@eximietas.design
              </span>
              <span className="underline font-semibold cursor-pointer">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-7 py-5 2xl:px-30 flex flex-col gap-y-8">
        <SubHeader />
        <div className="flex sm:flex-row flex-col gap-x-5 2xl:gap-x-8 sm:gap-y-0 gap-y-5">
          <SearchEditMilkData />
          <div className="flex flex-col gap-y-4 2xl:gap-y-10">
            <OwnerInfo />
            <DownloadFile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
