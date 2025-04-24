"use client";

import { CalendarIcon } from "lucide-react";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { FC } from "react";

interface IDatePickerProps {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    className:string;
  }
  

export const DatePicker: FC<IDatePickerProps> = ({ date, setDate,className }) => {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <CalendarIcon className={className}/>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
      <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
