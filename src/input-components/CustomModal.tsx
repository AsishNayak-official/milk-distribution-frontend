
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog"
import { ReactNode } from "react"

interface CustomDialogProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    triggerButton?: ReactNode;
    header?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    className?:string;
  }
  
  export function CustomDialog({
    isOpen,
    onOpenChange,
    triggerButton,
    header,
    content,
    footer,
    className,
  }: CustomDialogProps) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {triggerButton && <DialogTrigger asChild>{triggerButton}</DialogTrigger>}
        <DialogContent className={className}>
          {header && <DialogHeader>{header}</DialogHeader>}
          {content && <>{content}</>}
          {footer && <DialogFooter>{footer}</DialogFooter>}
        </DialogContent>
      </Dialog>
    );
  }