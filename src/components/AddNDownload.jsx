import { AttachmentIcon, DownloadIcon } from "@chakra-ui/icons";
import React from 'react';
import { useNavigate } from "react-router-dom";

const AddNDownload = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row gap-x-2'>
        <div onClick={()=>{navigate("/add-user"); }} className='w-1/2  h-[7vh] border-2 border-green-400 p-2 rounded-xl flex justify-center items-center gap-x-3'>Add User <AttachmentIcon/></div>
        <div className='w-1/2 border-2 h-[7vh]  border-green-400 p-2 rounded-xl flex justify-center items-center gap-x-3'>Download <DownloadIcon/></div>
    </div>
  )
}

export default AddNDownload