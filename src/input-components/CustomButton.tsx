import { Button } from "@/components/ui/button";
import React from "react";


interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string; // Button label
    isLoading?: boolean; // Show loading spinner
    disabled?: boolean; // Disable button
    variant?: "default" | "outline" | "ghost" | "destructive"; // Variant types
    size?: "default" | "sm" | "lg" | "icon"; // Button size
    iconRight?: React.ReactNode; // Optional icon before text
    iconLeft?: React.ReactNode; // Optional icon before text
    children?: string | number;
    className?: string;
    onClick?: () => void; // Click event handler
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    (
        {
            text,
            isLoading = false,
            disabled,
            variant = "default",
            size = "default",
            iconRight,
            children,
            className = "",
            iconLeft,
            onClick,
            ...props
        },
        ref
    ) => {
        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                disabled={disabled || isLoading}
                onClick={onClick}
                className={className}
                {...props}
            >
                {iconLeft && <span className="mr-auto">{iconLeft}</span>}
                {(text || children) && <span className="flex-1 text-center">{children || text}</span>}
                {iconRight && <span className="ml-auto">{iconRight}</span>}
            </Button>
        );
    }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
