import React, { useState } from 'react'
import { DatePicker } from './DatePicker'
import dayjs from 'dayjs';
import { ChartSpline, Users } from 'lucide-react';

const SubHeader = () => {
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();
  return (
    <div className="flex sm:flex-row flex-col justify-between gap-x-10 gap-y-5 sm:gap-y-0">
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative">
            <DatePicker date={startDate} setDate={setStartDate} className={'absolute right-5'}/>
            <span className="text-sm">Star Date</span>
            <span className="text-2xl">{dayjs(startDate ?? new Date()).format("DD MMM YYYY")}</span>
            <span className="text-sm text-gray-500">{dayjs(startDate ?? new Date()).format("dddd, D MMMM YYYY")}</span>
        </div>
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative">
            <DatePicker date={endDate} setDate={setEndDate} className={'absolute right-5'}/>
            <span className="text-sm">End Date</span>
            <span className="text-2xl">{dayjs(endDate ?? new Date()).format("DD MMM YYYY")}</span>
            <span className="text-sm text-gray-500">{dayjs(endDate ?? new Date()).format("dddd, D MMMM YYYY")}</span>
        </div>
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative">
        <ChartSpline className={'absolute right-5'}/>
            <span className="text-sm">Total Collection</span>
            <span className="text-2xl">07,2025</span>
            <span className="text-sm text-gray-500">Cost estimation around $2025(approx)</span>
        </div>
        <div className="flex flex-col border w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-black to-gray-800 relative">
        <Users className={'absolute right-5'}/>
            <span className="text-sm">Add Customer</span>
            <span className="text-2xl">2025</span>
            <span className="text-sm text-gray-500">Click to add new customer</span>
        </div>
      </div>    
  )
}

export default SubHeader