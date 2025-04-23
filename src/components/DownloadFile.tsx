import { FileText } from 'lucide-react'
import React from 'react'

const DownloadFile = () => {
  return (
    <div className='border h-[17vh] sm:w-[25vw] 2xl:h-[15vh] 2xl:w-[20vw] w-full flex flex-row rounded-xl p-10 sm:p-3 2xl:p-4  items-center justify-between'>
        <div className='flex flex-col gap-y-3'>
        <span className='text-lg font-semibold'>Finalize and Download</span>
        <span className='text-sm underline underline-offset-3'>start_date-end_date-diary_file.pdf</span>
        <span className='text-sm text-gray-500'>Click on file to FInalize and Download...</span>
        </div>
        <FileText size={50} />
    </div>
  )
}

export default DownloadFile