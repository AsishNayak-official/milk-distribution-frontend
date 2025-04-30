
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface CustomDialogProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    header?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    className?:string;
  }
  
  export function CustomDialog({
    isOpen,
    onOpenChange,
    header,
    content,
    footer,
    className,
  }: CustomDialogProps) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className={className}>
          {header && <DialogTitle>{header}</DialogTitle>}
          {content && <>{content}</>}
          {footer && <DialogFooter>{footer}</DialogFooter>}
        </DialogContent>
      </Dialog>
    );
  }