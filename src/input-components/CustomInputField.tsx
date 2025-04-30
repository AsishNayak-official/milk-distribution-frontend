import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: "text" | "email" | "password" | "number";
    label?: string;
    error?: boolean;
    supportText?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
    type = "text",
    label,
    error = false,
    supportText = "",
    className = "",
    onChange,
    min,
    max,
    ...props
}) => {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    return (
        <div className="flex flex-col gap-0.5 w-full">
            {/* Label (Optional) */}
            {label && <Label>{label}</Label>}

            <div className="relative">
                {/* Input Field */}
                <Input
                    {...props}
                    onChange={(e) => {
                        const value = e.target.value;
                        if(typeof(value)=="number"){
                            if (min !== undefined && value < min) {
                                e.target.value = String(min);
                            } else if (max !== undefined && value > max) {
                                e.target.value = String(max);
                            }
                        }
                        onChange?.(e); 
                    }}
                    type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                    className={className}
                />

                {/* Password Visibility Toggle */}
                {type === "password" && (
                    <button
                        type="button"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        onClick={() => setPasswordVisibility((prev) => !prev)}
                    >
                        {isPasswordVisible ? <EyeOff size={20} className="mr-1" /> : <Eye size={20} className="mr-1" />}
                    </button>
                )}
            </div>

            {/* Support or Error Text */}
            {supportText ? (
                <span className={`text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>{supportText}</span>
            ) : (
                <span className="text-sm opacity-0">Placeholder</span> // Keeps layout stable
            )}
        </div>
    );
};

export default CustomInput;
