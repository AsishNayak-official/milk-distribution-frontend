import { MoveUpRight } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import EditCustomerInformation from "./EditCustomerInformation";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchEditMilkData = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  
  const handleEdit = () => {
    setShowModal(true);
  };

//   const updateMilkInfo = (total_qty_milk_supplied:number) => {
//     // updateUserInfo(shopId, userInfo?.id, { total_qty_milk_supplied: milkQty })
//     //   .then((res) => {})
//     //   .catch((err) => {});
//   };
  return (
    <>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Customers (10)">
            <CommandItem onSelect={(e) => console.log({ e })}>
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
                      <span className="leading-tight">F Nayak</span>
                      <span>asish.nayak@eximietas.design</span>
                    </div>
                  </div>
                  <div>
                    <Button className="sm:hidden bg-transparent hover:bg-transparent" onClick={handleEdit}>
                      <MoveUpRight />
                    </Button>
                  </div>
                </div>
                <Input
                  type="number"
                  className="w-[60%] sm:w-[30%]"
                  placeholder="Milk in ltrs"
                //   value={indexed.total_qty_milk_supplied}
                //   onBlur={()=> {updateMilkInfo(indexed.total_qty_milk_supplied)}}
                />
                <Button
                  className="hidden sm:block cursor-pointer bg-transparent hover:bg-transparent"
                  onClick={handleEdit}
                >
                  <MoveUpRight />
                </Button>
              </div>
            </CommandItem>
            <CommandItem onSelect={(e) => console.log({ e })}>
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
                      <span className="leading-tight">E Nayak</span>
                      <span>asish.nayak@eximietas.design</span>
                    </div>
                  </div>
                  <div>
                    <Button className="sm:hidden bg-transparent hover:bg-transparent" onClick={handleEdit}>
                      <MoveUpRight />
                    </Button>
                  </div>
                </div>
                <Input
                  type="number"
                  className="w-[60%] sm:w-[30%]"
                  placeholder="Milk in ltrs"
                //   value={indexed.total_qty_milk_supplied}
                //   onBlur={()=> {updateMilkInfo(indexed.total_qty_milk_supplied)}}
                />
                <Button
                  className="hidden sm:block cursor-pointer bg-transparent hover:bg-transparent"
                  onClick={handleEdit}
                >
                  <MoveUpRight />
                </Button>
              </div>
            </CommandItem>
            <CommandItem onSelect={(e) => console.log({ e })}>
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
                      <span className="leading-tight">D Nayak</span>
                      <span>asish.nayak@eximietas.design</span>
                    </div>
                  </div>
                  <div>
                    <Button className="sm:hidden bg-transparent hover:bg-transparent" onClick={handleEdit}>
                      <MoveUpRight />
                    </Button>
                  </div>
                </div>
                <Input
                  type="number"
                  className="w-[60%] sm:w-[30%]"
                  placeholder="Milk in ltrs"
                //   value={indexed.total_qty_milk_supplied}
                //   onBlur={()=> {updateMilkInfo(indexed.total_qty_milk_supplied)}}
                />
                <Button
                  className="hidden sm:block cursor-pointer bg-transparent hover:bg-transparent"
                  onClick={handleEdit}
                >
                  <MoveUpRight />
                </Button>
              </div>
            </CommandItem>
            <CommandItem onSelect={(e) => console.log({ e })}>
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
                      <span className="leading-tight">C Nayak</span>
                      <span>asish.nayak@eximietas.design</span>
                    </div>
                  </div>
                  <div>
                    <Button className="sm:hidden bg-transparent hover:bg-transparent" onClick={handleEdit}>
                      <MoveUpRight />
                    </Button>
                  </div>
                </div>
                <Input
                  type="number"
                  className="w-[60%] sm:w-[30%]"
                  placeholder="Milk in ltrs"
                //   value={indexed.total_qty_milk_supplied}
                //   onBlur={()=> {updateMilkInfo(indexed.total_qty_milk_supplied)}}
                />
                <Button
                  className="hidden sm:block cursor-pointer bg-transparent hover:bg-transparent"
                  onClick={handleEdit}
                >
                  <MoveUpRight />
                </Button>
              </div>
            </CommandItem>
            <CommandItem onSelect={(e) => console.log({ e })}>
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
                      <span className="leading-tight">B Nayak</span>
                      <span>asish.nayak@eximietas.design</span>
                    </div>
                  </div>
                  <div>
                    <Button className="sm:hidden bg-transparent hover:bg-transparent" onClick={handleEdit}>
                      <MoveUpRight />
                    </Button>
                  </div>
                </div>
                <Input
                  type="number"
                  className="w-[60%] sm:w-[30%]"
                  placeholder="Milk in ltrs"
                //   value={indexed.total_qty_milk_supplied}
                //   onBlur={()=> {updateMilkInfo(indexed.total_qty_milk_supplied)}}
                />
                <Button
                  className="hidden sm:block cursor-pointer bg-transparent hover:bg-transparent"
                  onClick={handleEdit}
                >
                  <MoveUpRight />
                </Button>
              </div>
            </CommandItem>
            <CommandItem onSelect={(e) => console.log({ e })}>
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
                      <span className="leading-tight">A Nayak</span>
                      <span>asish.nayak@eximietas.design</span>
                    </div>
                  </div>
                  <div>
                    <Button className="sm:hidden bg-transparent hover:bg-transparent" onClick={handleEdit}>
                      <MoveUpRight />
                    </Button>
                  </div>
                </div>
                <Input
                  type="number"
                  className="w-[60%] sm:w-[30%]"
                  placeholder="Milk in ltrs"
                //   value={indexed.total_qty_milk_supplied}
                //   onBlur={()=> {updateMilkInfo(indexed.total_qty_milk_supplied)}}
                />
                <Button
                  className="hidden sm:block cursor-pointer bg-transparent hover:bg-transparent"
                  onClick={handleEdit}
                >
                  <MoveUpRight />
                </Button>
              </div>
            </CommandItem>
            
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
      {showModal && (
        <EditCustomerInformation
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default SearchEditMilkData;
