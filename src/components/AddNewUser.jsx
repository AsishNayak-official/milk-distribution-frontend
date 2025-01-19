import React from 'react'
import UserForm from './UserForm'
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';


const AddNewUser = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-2 py-3 relative overflow-y-auto">
  <ArrowBackIcon onClick={()=>{navigate('/')}} className="absolute left-5 top-4" />
  <p>Add New User</p>
  <UserForm shopId={localStorage.getItem('shopId')}/>
</div>
  )
}

export default AddNewUser