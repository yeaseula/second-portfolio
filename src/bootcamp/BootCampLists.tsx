import styled from "styled-components"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { bootcampInforType } from "../types/bootcamp"
import { usePosterModal } from "../hook/useModal"
import Modal from "../common/Modal"

export default function BootCampLists({data}:{data:bootcampInforType}) {
    const HoverRef = useRef<HTMLDivElement>(null)
    const ItemListRef = useRef<HTMLButtonElement>(null)
    const [rect, setRect] = useState<DOMRect | null>(null)
    const [pointer,setPointer] = useState<boolean>(false)
    const [hoverPos,setHoverPos] = useState({left: 0, top: 0})
    //const [selected, setSelected] = useState<string | null>(null)

    const {
        moreview,modal,contentId,selected,
        setSelected,
        setContentId,
        showMore,hideMore,
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
        >
            <ListItems
                ref={ItemListRef}
                layoutId={data.layoutId}
                onClick={() => setSelected(data.layoutId)}
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
            <Modal onClick={() => setSelected(null)}>
                <ListModalWrapper
                    layoutId={data.layoutId}
                >
                    <h3 className="text-3xl">프론트엔드 기초 역량</h3>
                    <div className="relative">
                        <div className="mt-10">
                            <h3>학습 내용</h3>
                            <p className="mt-5 mb-3">HTML / CSS </p>

                            <p>• 시멘틱 마크업, 접근성을 고려한 설계가 가능합니다.</p>
                            <p>• Safari 환경에서의 CSS 크로스 브라우징 이슈 해결 경험이 있습니다.</p>
                            <p>• 개인,팀 프로젝트에 학습 내용을 적용하며 공부합니다.</p>
                        </div>
                        <div className="mt-10">
                            <h3>관련 프로젝트</h3>
                            <div className="mt-5">
                                <div className="text-">
                                    <p>프로젝트 개요 : HTML/CSS 기반 미니 프로젝트 2개 제작 및 발표</p>
                                    <p>역할 : 시멘틱 마크업, 반응형 작업 </p>
                                    <p>성과 : 최종 발표 <b>대상(1등)</b> 수상</p>
                                    <div className="mt-5">
                                        <button>git hub 보러가기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <img src="/image/bootcamp-project1-pc.png" alt="" />
                        </div>
                    </div>
                </ListModalWrapper>
            </Modal>
        )}
        </AnimatePresence>
        </>
    )
}

const ListInner = styled.div`
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