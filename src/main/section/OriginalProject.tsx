
import { yeOriginal } from "../../data/portfolio"
import OriginalLogo from "../../common/OriginalLogo"
import PosterWrapper from "../../common/poster/PosterWrapper"
import PosterInner from "../../common/poster/PosterInner"

export default function OriginalProject() {

    return (
        <PosterWrapper title={<OriginalLogo fonts={'3rem'}/>}>
            <PosterInner data={yeOriginal}/>
        </PosterWrapper>
    )
}