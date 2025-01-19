import { ChevronDownIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import { updateUserInfo } from "../api/userDetailsApi";

const NameCard = ({index,userInfo,shopId}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [milkQty, setMilkQty] = useState("");

  useEffect(()=>{
    setMilkQty(userInfo?.milk_supplied)
    console.log("first")
  },[userInfo])

  const handleMilkQtyChange=(e)=>{
    setMilkQty(e?.target?.value);
    console.log("second")
  }

  const updateMilkInfo=()=>{
    updateUserInfo(shopId,userInfo?.id,{milk_supplied:milkQty})
    .then((res)=>{

    })
    .catch((err)=>{})
  }


  return (
    <div className="border-2 border-red-400 p-3 rounded-[10px]">
      <div className="w-full sm:w-[30vw] flex flex-row gap-x-3 items-center">
        <div className="bg-green-400 rounded-full h-10 w-12 items-center flex justify-center">{index+1}</div>
        <div className="flex flex-row gap-x-1 w-full items-center">
          <div className="w-1/2">{userInfo?.name}</div>
          <div className="w-1/2">
            <Input variant="filled" placeholder="Milk in ltrs" value={milkQty} onBlur={updateMilkInfo} onChange={handleMilkQtyChange} />
          </div>
        </div>
        <div>
          <ChevronDownIcon onClick={()=>{setIsExpanded(!isExpanded)}} />
        </div>
      </div>
      {isExpanded && <UserForm shopId={shopId} disable={true} userInfo={userInfo}/>}
    </div>
  );
};

export default NameCard;
