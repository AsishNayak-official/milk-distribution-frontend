import { ShopInfo } from "@/lib/types";
import { fetchShop } from "@/redux/actions/shopSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/redux.hooks";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

const OwnerInfo = () => {
  const dispatch = useAppDispatch();
  const shopInfo :ShopInfo = useAppSelector((state: RootState) => state.shopInfo.shop);

  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);

  return (
    <div className="border 2xl:w-[20vw] sm:w-[25vw] w-full rounded-xl flex flex-col items-start justify-center text-sm gap-y-2 px-3 py-5 ">
      {/* <Avatar className="h-24 w-24">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
      <span className="font-semibold underline underline-offset-2">
        CASH INCENTIVE TO OMFED DAIRY FARMERS
      </span>
      <span>
        <span className="font-semibold">Society Name</span>: {shopInfo?.society_name}
      </span>
      <span>
        <span className="font-semibold">Society Code</span>: {shopInfo?.society_code}
      </span>
      <span>
        <span className="font-semibold">Unit</span>: {shopInfo?.unit}
      </span>
      <span>
        <span className="font-semibold">Month</span>: {shopInfo?.month}
      </span>
      <span>
        <span className="font-semibold">Collector</span>: ASISH KUMAR NAYAK
      </span>
    </div>
  );
};

export default OwnerInfo;
