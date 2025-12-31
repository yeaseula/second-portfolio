import styled from "styled-components";
import React, { useEffect } from "react";

import { motion } from "framer-motion"

const Wrapper = styled(motion.div)`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;
}`
const ModalBack = styled(motion.div)`
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 1;
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
        <Wrapper>
            <ModalBack
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
            >
            </ModalBack>
            {children}
        </Wrapper>
        </>
    )
}