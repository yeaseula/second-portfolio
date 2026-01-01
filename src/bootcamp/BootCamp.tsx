import PosterWrapper from "../common/ContentsWrapper"
import Logo from "../common/Logo"
import BootCampInner from "../bootcamp/BootcampInner"
import { bootcampInforType } from "../types/bootcamp"
import { bootCampInfo } from "../data/bootcamp"

export default function BootCamp() {
    return (
        <PosterWrapper
        title={<Logo fonts={'2.4rem'} text={'부트캠프'}/>}
        screenReader="부트캠프 활동을 하며 배운 스킬, 협업 관련 사항, 진행한 프로젝트 등을 정리했습니다."
        >
            <div className="w-full">
                <BootCampInner data={bootCampInfo}/>
            </div>
        </PosterWrapper>
    )
}
