import styled from "styled-components"
import { PortfolioType } from "../../types/portfolio"

const LinkButtonContainer = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 30;
    display: flex;
    gap: 7px;
`

export default function DetailTop({targetdata}:{targetdata:PortfolioType}) {
    return (
        <>
            <LinkButtonContainer>
                <a href={targetdata.github_url}>깃헙</a>
                <a href={targetdata.site_url}>페이지보기</a>
            </LinkButtonContainer>
        </>
    )
}