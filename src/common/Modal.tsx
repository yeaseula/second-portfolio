import styled from "styled-components";
import React, { useEffect } from "react";

import { motion } from "framer-motion"

const Container = styled(motion.div)`
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

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
            <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
            >
                {children}
            </Container>
        </>
    )
}