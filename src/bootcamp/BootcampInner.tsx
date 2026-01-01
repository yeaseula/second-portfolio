import styled from "styled-components"
import { motion } from "framer-motion"
import { bootcampInforType } from "../types/bootcamp"
import BootCampLists from "./BootCampLists"

export default function BootCampInner({data}:{data:bootcampInforType[]}) {

    return (
        <>
        <div className="flex gap-5">
            <div className="flex-2">
                <ListWrapper>
                    {data.map((ele)=>(
                        <BootCampLists key={ele.layoutId} data={ele} />
                    ))}
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
        </>
    )
}
const ListWrapper = styled(motion.div)`
    display: grid;
    gap: 10px;
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
