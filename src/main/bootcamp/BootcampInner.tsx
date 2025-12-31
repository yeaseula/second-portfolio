import styled from "styled-components"
import { motion } from "framer-motion"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Modal from "../../common/Modal"

export default function BootCampInner() {

    const [selected, setSelected] = useState<string | null>(null)
    return (
        <>
        <div className="flex gap-5">
        <div className="flex-2">
            <motion.div layout className="grid gap-4">
                <ListItems
                    layoutId="frontend-basic"
                    onClick={() => setSelected("frontend-basic")}
                    className="cursor-pointer"
                >
                    <h3 className="text-3xl">프론트엔드 기초 역량</h3>
                    <p className="mt-3">HTML/CSS 시멘틱 마크업과 접근성을 고려한 코드 작성</p>
                </ListItems>
                <ListItems
                    layoutId="frontend-deepening"
                    onClick={() => setSelected("frontend-deepening")}
                    className="cursor-pointer"
                >
                    <h3 className="text-3xl">자바스크립트 · 인터랙션 구현</h3>
                    <p className="mt-3">JavaScript 클래스 기반 로직 설계와 Three.js를 활용한 기본적인 3D 인터랙션 구현</p>
                </ListItems>
            </motion.div>
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
                                    <p>내용 : HTML/CSS 기반 미니 프로젝트 2개 제작 및 발표</p>
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

const ListItems =styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 35px 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
`

const ListModalWrapper = styled(motion.div)`
    position: relative;
    z-index: 5;
    max-width: 850px;
    width: 100%;
    border-radius: 12px;
    background-color: var(--background_color);
    padding: 35px 20px;
    height: calc(100vh - 40px);
    overflow-y: auto;
`