import React from "react";
import ModalBack from "./ModalBack"


interface ModalProps {
    children: React.ReactNode
    onClick: () => void;
}

export default function Modal({onClick,children}:ModalProps){
    return (
        <>
        <ModalBack onClick={onClick} />
        {children}
        </>
    )
}