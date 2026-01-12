import styled from "styled-components"
import { PortfolioType } from "../../types/portfolio"

const DefaultInfor = styled.div`
    display: flex;
    gap: 5px;
    font-size: 1.4rem;
`
const MainCopy = styled.p`
    font-size: 1.8rem;
    margin: 10px 0 25px 0;
`
const HashTag = styled.span`
    border-radius: 50px;
    background-color: #fff;
    font-size: 1.4rem;
    color: #000000;
    padding: 1px 10px;
`
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
            {/* <DefaultInfor>
                <span>{targetdata.title} · </span>
                <span>{targetdata.period} · </span>
                <span>{targetdata.contribution}</span>
            </DefaultInfor>

            <MainCopy>
                {targetdata.description}
            </MainCopy> */}

            {/* <DefaultInfor>
                {targetdata.hashtags.map((tag,idx)=>(
                    <span key={`${tag}-${idx}`}>{tag}</span>
                ))}
            </DefaultInfor> */}
{/*
            <DefaultInfor>
                {targetdata.skills.map((skill,idx)=>(
                    <HashTag key={`${skill}-${idx}`}>{skill}</HashTag>
                ))}
            </DefaultInfor> */}

            <LinkButtonContainer>
                <a href={targetdata.github_url}>깃헙</a>
                <a href={targetdata.site_url}>페이지보기</a>
            </LinkButtonContainer>
        </>
    )
}