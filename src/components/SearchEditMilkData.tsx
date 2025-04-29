import { MoveUpRight } from "lucide-react";

import { getCustomers, updateCustomer } from "@/api/customerApi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { UserInfo } from "@/lib/types";
import { useEffect, useState } from "react";
import EditCustomerInformation from "./EditCustomerInformation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useAppDispatch } from "@/redux/hooks/redux.hooks";
import { updateCounter } from "@/redux/actions/utilitySlice";

const SearchEditMilkData = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [customerList, setCustomerList] = useState<UserInfo[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  const dispatch = useAppDispatch();

  
  const handleEdit = () => {
    setShowModal(true);
  };

  const updateMilkInfo = (customer: UserInfo) => {
    updateCustomer(customer?.id ?? "", customer)
      .then(() => {})
      .catch(() => {});
    };
    
    useEffect(() => {
      getCustomers()
      .then((res) => {
        setCustomerList(res ?? []);
        const milkSuppliedCount = res?.reduce((total:number, customer:UserInfo) => {
          return total + parseFloat(customer?.milk_supplied || "0");
        }, 0);
        dispatch(updateCounter({customerCount: res?.length, milkSuppliedCount}))
      })
      .catch(() => {});
  }, []);


  const handleMilkChange = (id: string, value: string) => {
    setCustomerList((prevList) =>
      prevList.map((customer) =>
        customer.id === id ? { ...customer, milk_supplied: value } : customer
      )
    );
  };

  return (
    <>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading={`Customers (${customerList?.length})`}>
            {customerList.map((customer) => (
              <CommandItem
                key={customer?.id}
                onSelect={() => setSelectedId(customer?.id ?? "")}
              >
                <div className="flex flex-col sm:flex-row justify-between w-full items-center">
                  <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                    <div className="flex items-center gap-4 flex-row">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-y-0">
                        <span className="leading-tight">
                          {customer?.name ?? ""}
                        </span>
                        <span>Member ID: {customer?.membership_no ?? ""}</span>
                      </div>
                    </div>
                    <div>
                      <Button
                        className="sm:hidden bg-transparent hover:bg-transparent"
                        onClick={handleEdit}
                      >
                        <MoveUpRight />
                      </Button>
                    </div>
                  </div>
                  <Input
                    type="number"
                    className="w-[60%] sm:w-[30%]"
                    placeholder="Milk in ltrs"
                    value={customer?.milk_supplied ?? ""}
                    onChange={(e) =>
                      handleMilkChange(customer?.id ?? "", e.target.value)
                    }
                    onBlur={() => {
                      updateMilkInfo(customer);
                    }}
                  />
                  <Button
                    className="hidden sm:block cursor-pointer bg-transparent hover:bg-transparent"
                    onClick={handleEdit}
                  >
                    <MoveUpRight />
                  </Button>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
      {showModal && (
        <EditCustomerInformation
          selectedId={selectedId}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default SearchEditMilkData;
