import styled from "styled-components"
import PosterWrapper from "../../common/poster/PosterWrapper"
import Logo from "../../common/Logo"
import BootCampInner from "../bootcamp/BootcampInner"

export default function BootCamp() {
    return (
        <PosterWrapper title={<Logo fonts={'2.4rem'} text={'부트캠프'}/>}>
            <div className="w-full">

                <BootCampInner />
            </div>
        </PosterWrapper>
    )
}
