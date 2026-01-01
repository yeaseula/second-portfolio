import styled from "styled-components"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Modal from "../common/Modal"

export default function BootCampInner() {
    const HoverRef = useRef<HTMLDivElement>(null)
    const ItemListRef = useRef<HTMLButtonElement>(null)
    const [rect, setRect] = useState<DOMRect | null>(null)
    const [pointer,setPointer] = useState<boolean>(false)
    const [hoverPos,setHoverPos] = useState({left: 0, top: 0})

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

    const [selected, setSelected] = useState<string | null>(null)
    return (
        <>
        <div className="flex gap-5">
            <div className="flex-2">
                <ListWrapper>
                    <ListInner
                    onMouseEnter={()=>setPointer(true)}
                    onMouseLeave={()=>setPointer(false)}
                    >
                        <ListItems
                            ref={ItemListRef}
                            layoutId="frontend-basic"
                            onClick={() => setSelected("frontend-basic")}
                            className="cursor-pointer"
                            onMouseMove={handlePointer}
                            whileHover={{ transform: 'translateY(-3px)' }}
                        >
                            <h3 className="text-3xl">프론트엔드 기초 역량</h3>
                            <p className="mt-3">HTML/CSS 시멘틱 마크업과 접근성을 고려한 코드 작성</p>
                            <HoverShow
                            ref={HoverRef}
                            $pointer={pointer}
                            $hoverPosX={hoverPos.left}
                            $hoverPosY={hoverPos.top}
                            />
                        </ListItems>
                    </ListInner>
                    <ListItems
                        layoutId="frontend-deepening"
                        onClick={() => setSelected("frontend-deepening")}
                        className="cursor-pointer "
                    >
                        <h3 className="text-3xl">자바스크립트 · 인터랙션 구현</h3>
                        <p className="mt-3">JavaScript 클래스 기반 로직 설계와 Three.js를 활용한 기본적인 3D 인터랙션 구현</p>
                    </ListItems>
                    <ListItems
                        layoutId="frontend-react"
                        onClick={() => setSelected("frontend-react")}
                        className="cursor-pointer "
                    >
                        <h3 className="text-3xl">React · Typescript</h3>
                        <p className="mt-3">상태 복잡도에 따라 컴포넌트를 분리, 타입 정의를 통해 유지보수 가능한 로직 구현</p>
                    </ListItems>
                </ListWrapper>
            </div>
            <div className="flex-1">
                <ListItems>
                    <p className="text-3xl">모두의 연구소 • 위니브 프론트엔드 부트캠프</p>
                    <p className="mt-3 text-gray-300">2025.07~2025.11</p>
                    <p className="mt-6">프론트엔드 기초부터 React/Typescript까지<br /> 단계적으로 학습하며<br />
                        개인 프로젝트 1건과 팀 프로젝트 2건을 통해<br />
                        UI구현, 로직 설계, 협업 경험을 쌓았습니다.
                    </p>
                </ListItems>
            </div>
        </div>

        <AnimatePresence>
        {selected === "frontend-basic" && (
            <Modal onClick={() => setSelected(null)}>
                <ListModalWrapper
                    layoutId="frontend-basic"
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
        {selected === "frontend-deepening" && (
            <Modal onClick={() => setSelected(null)}>
                <ListModalWrapper
                    layoutId="frontend-deepening"
                >
                    <h3 className="text-3xl">자바스크립트 · 인터랙션 구현</h3>
                    <div className="relative">
                        <div className="mt-10">
                            <h3>학습 내용</h3>
                            <p className="mt-5 mb-3">javascript</p>

                            <p>• javascript </p>
                            <p>• </p>
                        </div>
                        <div className="mt-10">
                            <h3>관련 프로젝트</h3>
                            <div className="mt-5">
                                <div className="text-">
                                    <p>HODU SUPER | 오픈마켓 쇼핑몰</p>
                                    <p>프론트엔드 3인 프로젝트</p>
                                    <p>프로젝트 개요</p>
                                    <p>HTML/CSS/javascript를 활용해 오픈마켓 쇼핑몰 제작</p>
                                    <p>기여 내용</p>
                                    <p>
                                        1. 팀장<br/>
                                        PR 검토 후 merge 승인<br/>

                                        2. 기능 구현<br/>
                                        회원가입/로그인 - javascript를 활용한 유효성 검사,<br/>
                                        프로젝트 시작 전 미리 모듈을 만들어 팀원에게 공유 및 활용
                                        alert - javascript class 구조 기반으로 모듈화<br/>

                                        3. UI<br/>
                                        UI/UX 구현 피드백 - 퍼블리셔 실무 경력을 기반으로 코드 피드백<br/>
                                        모바일 디자인 아이디어 제공<br/>

                                        4. 팀워크<br/>
                                        갈등 예방을 위해 1일 1회 교육종료 전 "칭찬 감옥" 시스템을 제안,<br/>
                                        서로의 장점 및 칭찬할 점을 말하도록 유도

                                        5. 에셋 제작<br/>
                                        대표이미지, 파비콘 제작
                                    </p>
                                    <p>회고 : <a href="">블로그에 회고 기록이 있습니다.</a></p>
                                    <div className="mt-5">
                                        <button>git hub 보러가기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ListModalWrapper>
            </Modal>
        )}
        </AnimatePresence>
        </>
    )
}
const ListWrapper = styled(motion.div)`
    display: grid;
    gap: 10px;
`
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