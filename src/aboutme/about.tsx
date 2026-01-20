import ContentsWrapper from "../common/ContentsWrapper"
import OriginalLogo from "../common/OriginalLogo"
import { AboutInner } from "./AboutInner"

export default function AboutMe() {
    return (
        <ContentsWrapper title={<OriginalLogo fonts={'3rem'} text={'Introduce'}/>}>
            <AboutInner />
        </ContentsWrapper>
    )
}