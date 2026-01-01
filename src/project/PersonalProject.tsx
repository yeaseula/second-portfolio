import Logo from "../common/Logo"
import ContentsWrapper from "../common/ContentsWrapper"
import PosterInner from "./poster/PosterInner"
import { personalProject } from "../data/portfolio"

export default function PersonalProject() {
    return (
        <ContentsWrapper title={<Logo fonts={'2.4rem'} text={'개인 프로젝트'}/>}>
            <PosterInner data={personalProject}/>
        </ContentsWrapper>
    )
}