import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled(motion.div)`
    position: fixed;
    inset: 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index: 10;
`

export default function ModalBack({onClick}:{onClick:()=>void}) {
    return (
            <Container
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
            >

            </Container>
    )
}