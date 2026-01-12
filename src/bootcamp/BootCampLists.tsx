import styled from "styled-components"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { bootcampInforType } from "../types/bootcamp"
import { usePosterModal } from "../hook/useModal"
import Modal from "../common/Modal"
import BootCampDetail from "./BootCampDetail"

export default function BootCampLists({data}:{data:bootcampInforType}) {
    const HoverRef = useRef<HTMLDivElement>(null)
    const ItemListRef = useRef<HTMLButtonElement>(null)
    const [rect, setRect] = useState<DOMRect | null>(null)
    const [pointer,setPointer] = useState<boolean>(false)
    const [hoverPos,setHoverPos] = useState({left: 0, top: 0})

    const {
        modal,selected,
        openModal, closeModal
    } = usePosterModal()

    const handlePointer = (e:React.MouseEvent<HTMLButtonElement>) => {
        if(!ItemListRef.current) return

        const pointer = ItemListRef.current.getBoundingClientRect()
        setRect(pointer)

        if(!rect) return
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setHoverPos(hoverPos=>({
            ...hoverPos,
            left: x,
            top: y
        }))
    }

    return (
        <>
        <ListInner
        onMouseEnter={()=>setPointer(true)}
        onMouseLeave={()=>setPointer(false)}
        $modal={modal}
        >
            <ListItems
                ref={ItemListRef}
                layoutId={data.layoutId}
                onClick={()=>openModal(data.layoutId)}
                className="cursor-pointer"
                onMouseMove={handlePointer}
                whileHover={{ transform: 'translateY(-3px)' }}
            >
                <h3 className="text-3xl">{data.title}</h3>
                <p className="mt-3">{data.subtitle}</p>
                <HoverShow
                ref={HoverRef}
                $pointer={pointer}
                $hoverPosX={hoverPos.left}
                $hoverPosY={hoverPos.top}
                />
            </ListItems>
        </ListInner>
        <AnimatePresence>
        {selected === data.layoutId && (
            <Modal onClick={closeModal}>
                <ListModalWrapper
                    layoutId={data.layoutId}
                    role="dialog"
                >
                <BootCampDetail layoutId={data.layoutId} />
                </ListModalWrapper>
            </Modal>
        )}
        </AnimatePresence>
        </>
    )
}

const ListInner = styled.div<{$modal:boolean}>`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background: linear-gradient(45deg, #00bfff, var(--main_color));
        border-radius: 10px;
        filter: blur(2px);
        transition: all 0.3s ease-in-out;
        opacity: ${(p)=>p.$modal ? 0 : 1}
    }
    &:hover::before {
        transform: translateY(-3px);
        filter: blur(8px);
        background: linear-gradient(45deg, #00e0ff, var(--main_right_color));
    }
`
const ListItems =styled(motion.button)`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 35px 20px;
    border: 1px solid #616161;
    border-radius: 10px;
    overflow: hidden;
    //background: linear-gradient(180deg, #232223 0%, #1e2430 33%, #161a22 66%, #1f2320 100%);
    background-color: var(--black_color);
    &:focus-visible {
        outline: 2px solid var(--main_color)
    }
`
const HoverShow = styled.div<{$pointer:boolean, $hoverPosX:number, $hoverPosY:number}>`
    position: absolute;
    top: ${(p)=>p.$hoverPosY || 0}px;
    left: ${(p)=>p.$hoverPosX || 0}px;
    width: 120px;
    height: 120px;
    border-radius: 999px;
    transform: translate(-50%, -50%) rotateZ(40deg);
    background-color: #ffffff22;
    opacity: ${(p)=>p.$pointer ? 1 : 0};
    filter: blur(20px);
`
const ListModalWrapper = styled(motion.div)`
    position: relative;
    z-index: 5;
    max-width: 850px;
    width: 100%;
    border-radius: 12px;
    background-color: var(--background_color);
    padding: 35px 20px;
    height: calc(100vh - 100px);
    overflow-y: auto;
`