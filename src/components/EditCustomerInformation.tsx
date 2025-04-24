import { CustomDialog } from '@/input-components/CustomModal';
import React, { FC } from 'react';
import UserForm from './UserForm';

interface IEditCustomerProps{
    showModal:boolean;
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>;
}

const EditCustomerInformation:FC<IEditCustomerProps> = ({showModal,setShowModal}) => {
  return (
      <CustomDialog
      isOpen={showModal}
      onOpenChange={setShowModal}
      header={<span>Asish Kumar Nayak</span>}
      content={<UserForm shopId={''}/>}
      />
  )
}

export default EditCustomerInformation