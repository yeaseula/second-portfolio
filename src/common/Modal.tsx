import React, { useEffect } from "react";
import ModalBack from "./ModalBack"


interface ModalProps {
    children: React.ReactNode
    onClick: () => void;
}

export default function Modal({onClick,children}:ModalProps){

    useEffect(()=>{
        document.body.style.overflow = 'hidden'

        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[])

    return (
        <>
        <ModalBack onClick={onClick} />
        {children}
        </>
    )
}