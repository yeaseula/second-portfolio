import PosterWrapper from "../../common/poster/PosterWrapper"
import Logo from "../../common/Logo"
import BootCampInner from "../bootcamp/BootcampInner"

export default function BootCamp() {
    return (
        <PosterWrapper title={<Logo fonts={'2.4rem'} text={'부트캠프'}/>}>
            <div className="w-full">
                <p className="text-3xl">모두의 연구소 • 위니브 프론트엔드 부트캠프</p>
                <p className="mt-3 text-gray-300">2025.07~2025.11</p>
                <BootCampInner />
            </div>
        </PosterWrapper>
    )
}
