
import { yeOriginal } from "../../data/portfolio"
import OriginalLogo from "../../common/OriginalLogo"
import PosterInner from "../../common/poster/PosterInner"
import PosterWrapper from "../../common/poster/PosterWrapper"

export default function OriginalProject() {

    return (
        <PosterWrapper title={<OriginalLogo fonts={'3rem'}/>}>
            <PosterInner data={yeOriginal}/>
        </PosterWrapper>
    )
}