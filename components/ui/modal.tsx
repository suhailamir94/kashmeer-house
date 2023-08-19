"use client"

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}
) => {
    const onChage = (open: boolean) => {
        if (!isOpen) {
            onClose();
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={onChage}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}