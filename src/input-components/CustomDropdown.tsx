"use client"

import { ChevronDown } from "lucide-react";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import CustomButton from "./CustomButton";

type Option = {
    label: string;
    value: string;
  };

type IDropdownProps = {
    options: Option[];
    singleSelect?: boolean;
    showSelectedLabel?: boolean;
    defaultValue?: string | string[];
    onChange?: (selected: string | string[]) => void;
    defaultText?:string;
  };


export function CustomDropdown({
    options,
    singleSelect = false,
    showSelectedLabel = false,
    defaultText='Select',
    defaultValue = singleSelect ? "" : [],
    onChange,
  }: IDropdownProps) {
    const [selected, setSelected] = React.useState<string | string[]>(defaultValue);

    const handleSelection = (value: string) => {
        let newSelected;
        if (singleSelect) {
          newSelected = value;
        } else {
          newSelected = Array.isArray(selected)
            ? selected.includes(value)
              ? selected.filter((v) => v !== value)
              : [...selected, value]
            : [value];
        }
        setSelected(newSelected);
        onChange?.(newSelected);
      };

      const getLabel = () => {
        if (!showSelectedLabel) return defaultText;
        if (singleSelect) return options.find((opt) => opt.value === selected)?.label || defaultText;
        if (Array.isArray(selected) && selected.length > 0) {
          const labels = selected.map((val) => options.find((opt) => opt.value === val)?.label).filter(Boolean);
          return labels.length > 2 ? `${labels.slice(0, 2).join(", ")}...` : labels.join(", ");
        }
        return defaultText;
      };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <CustomButton variant="outline" className="w-full" text={getLabel()} iconRight={<ChevronDown />}>
        </CustomButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
      {singleSelect ? (
          <DropdownMenuRadioGroup value={selected as string} onValueChange={(value) => {
            setSelected(value);
            onChange?.(value);
          }}>
            {options?.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option?.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        ) : (
          options?.map((option) => (
            <DropdownMenuCheckboxItem
              key={option.value}
              checked={Array.isArray(selected) && selected.includes(option.value)}
              onCheckedChange={() => handleSelection(option.value)}
            >
              {option.label}
            </DropdownMenuCheckboxItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
