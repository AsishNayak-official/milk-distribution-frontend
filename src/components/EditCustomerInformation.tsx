import { CustomDialog } from '@/input-components/CustomModal';
import React, { FC, useEffect, useRef, useState } from 'react';
import UserForm from './UserForm';
import { getCustomerById } from '@/api/customerApi';
import { UserInfo } from '@/lib/types';

interface IEditCustomerProps{
    showModal:boolean;
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>;
    selectedId?:string;
}

const EditCustomerInformation:FC<IEditCustomerProps> = ({showModal,setShowModal,selectedId}) => {
  const [userInfo,setUserInfo] = useState<UserInfo>()
  const isFetching = useRef(false);

  useEffect(()=>{
    if (!selectedId || isFetching.current) return;

    isFetching.current = true;
      getCustomerById(selectedId)
      .then((res)=>{
        setUserInfo(res)
      })
      .catch(()=>{})
      .finally(() => {
        isFetching.current = false;
      });
    
  },[selectedId])

  return (
      <CustomDialog
      isOpen={showModal}
      onOpenChange={setShowModal}
      header={<span>Add / Edit Customer Information</span>}
      content={<UserForm setShowModal={setShowModal} userInfo={userInfo}/>}
      />
  )
}

export default EditCustomerInformation