import Logo from "../../common/Logo"
import PosterWrapper from "../../common/poster/PosterWrapper"
import PosterInner from "../../common/poster/PosterInner"
import { personalProject } from "../../data/portfolio"

export default function PersonalProject() {
    return (
        <PosterWrapper title={<Logo fonts={'2.4rem'} text={'개인 프로젝트'}/>}>
            <PosterInner data={personalProject}/>
        </PosterWrapper>
    )
}