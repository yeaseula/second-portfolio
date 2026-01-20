import ContentsWrapper from "../common/ContentsWrapper";
import OriginalLogo from "../common/OriginalLogo";
import TeamworkInner from "./TeamworkInner";

export default function Teamwork() {
    return (
        <ContentsWrapper title={<OriginalLogo fonts={'3rem'} text={'Teamwork Skills'}/>}>
            <TeamworkInner />
        </ContentsWrapper>
    )
}