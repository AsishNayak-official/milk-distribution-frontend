import React, { useState } from "react";
import { ChevronDownIcon,EditIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";


const NameCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="border-2 border-red-400 p-3 rounded-[10px]">
      <div className="w-full sm:w-[50vw] flex flex-row gap-x-3 items-center">
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
      {isExpanded && <div className="flex flex-col">
        <div className="flex flex-row justify-between"><div className="flex flex-row gap-x-1"><p>Membership No.</p> <p>:</p> <p>12345</p></div><div><EditIcon/></div></div>
        
        <p>Milk supplied(No of)</p>
        <Input variant="filled" placeholder="Milk supplied(No of)" />
        <p>Average</p>
        <div className="flex flex-row w-full gap-x-1">
          <div className="w-1/2"><p>Fat%</p><Input variant="filled" placeholder="Fat%" /></div>
          <div className="w-1/2"><p>SNF%</p><Input variant="filled" placeholder="SNF%" /></div>
        </div>
        <p>AADHAR NO.</p>
        <Input variant="filled" placeholder="AADHAR NO" />
        <p>Name of the bank</p>
        <Input variant="filled" placeholder="Name of the bank" />
        <p>Branch Name</p>
        <Input variant="filled" placeholder="Branch Name" />
        <p>Account Number</p>
        <Input variant="filled" placeholder="Account Number" />
        <p>IFSC Code</p>
        <Input variant="filled" placeholder="IFSC Code" />
      </div>}
    </div>
  );
};

export default NameCard;
