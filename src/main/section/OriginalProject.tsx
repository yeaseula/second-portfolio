
import { yeOriginal } from "../../data/portfolio"
import PosterInner from "../../common/poster/PosterInner"

import PosterWrapper from "../../common/poster/PosterWrapper"

export default function OriginalProject() {

    return (
        <PosterWrapper>
            <PosterInner data={yeOriginal}/>
        </PosterWrapper>
    )
}