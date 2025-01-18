import React, { useState } from 'react'
import { AtSignIcon, DownloadIcon} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const AddNDownload = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row gap-x-2'>
        <div onClick={()=>{navigate("/add-user"); }} className='w-1/2 border-2 border-green-400 p-2 rounded-xl flex justify-center items-center gap-x-3'>Add User <AtSignIcon/></div>
        <div className='w-1/2 border-2 border-green-400 p-2 rounded-xl flex justify-center items-center gap-x-3'>Download <DownloadIcon/></div>
    </div>
  )
}

export default AddNDownload