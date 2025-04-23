import React from 'react'

const SubHeader = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between gap-x-10 gap-y-5 sm:gap-y-0">
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl">
            <span className="text-sm">Star Date</span>
            <span className="text-2xl">07/03/2025</span>
            <span className="text-sm text-gray-500">Seventh March 2025</span>
        </div>
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl">
            <span className="text-sm">End Date</span>
            <span className="text-2xl">07/03/2025</span>
            <span className="text-sm text-gray-500">Seventh March 2025</span>
        </div>
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl">
            <span className="text-sm">Total Collection</span>
            <span className="text-2xl">07,2025</span>
            <span className="text-sm text-gray-500">8% over the month</span>
        </div>
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl">
            <span className="text-sm">Total Amount</span>
            <span className="text-2xl">07,2025</span>
            <span className="text-sm text-gray-500">8% over the month</span>
        </div>
      </div>
  )
}

export default SubHeader