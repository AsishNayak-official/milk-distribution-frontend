import { ChevronDownIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import UserForm from "./UserForm";

const NameCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="border-2 border-red-400 p-3 rounded-[10px]">
      <div className="w-full sm:w-[30vw] flex flex-row gap-x-3 items-center">
        <div className="bg-green-400 rounded-full h-10 w-12 items-center flex justify-center">1</div>
        <div className="flex flex-row gap-x-1 w-full items-center">
          <div className="w-1/2">Asish Kumar Nayak</div>
          <div className="w-1/2">
            <Input variant="filled" placeholder="Milk in ltrs" />
          </div>
        </div>
        <div>
          <ChevronDownIcon onClick={()=>{setIsExpanded(!isExpanded)}} />
        </div>
      </div>
      {isExpanded && <UserForm isEdit={isEdit} setIsEdit={setIsEdit}/>}
    </div>
  );
};

export default NameCard;
