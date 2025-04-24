import { CustomDialog } from '@/input-components/CustomModal';
import React, { FC } from 'react';

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
      content={<div>THese are the details</div>}
      />
  )
}

export default EditCustomerInformation