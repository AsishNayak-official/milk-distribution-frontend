import { downloadPDF } from '@/api/shopdetailsApi'
import { useAppSelector } from '@/redux/hooks/redux.hooks'
import dayjs from 'dayjs'
import { FileText } from 'lucide-react'
import React from 'react'

const DownloadFile = () => {
  const shopInfo = useAppSelector((state)=> state.shopInfo.shop)
  return (
    <div className='border sm:w-[25vw] 2xl:w-[20vw] w-full flex flex-row rounded-xl p-10 sm:p-3 2xl:p-4  items-center justify-between'>
        <div className='flex flex-col gap-y-3'>
        <span className='text-lg font-semibold'>Finalize and Download</span>
        <span className='text-xs underline underline-offset-3' onClick={downloadPDF}>Omfed BORNOS DATA {dayjs(shopInfo.start_bill_date).format('D')}-{dayjs(shopInfo.end_bill_date).format('D')} {dayjs(shopInfo.start_bill_date).format('MMM')} ON -WARD.pdf</span>
        <span className='text-sm text-gray-500'>Click on file to Finalize and Download...</span>
        </div>
        <FileText size={50} />
    </div>
  )
}

export default DownloadFile