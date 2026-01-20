
import { yeOriginal } from "../data/portfolio"
import OriginalLogo from "../common/OriginalLogo"
import ContentsWrapper from "../common/ContentsWrapper"
import ProjectInner from "./ProjectInner"

export default function Project() {

    return (
        <ContentsWrapper title={<OriginalLogo fonts={'3rem'} text={'PROJECT'}/>}>
            <ProjectInner data={yeOriginal}/>
        </ContentsWrapper>
    )
}