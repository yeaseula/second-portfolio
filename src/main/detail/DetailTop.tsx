import styled from "styled-components"
import { PortfolioType } from "../../types/portfolio"

const DefaultInfor = styled.ul`
    display: flex;
    gap: 5px;
    font-size: 1.4rem;
`
const MainCopy = styled.p`
    font-size: 1.8rem;
    margin: 10px 0 25px 0;
`
const HashTag = styled.li`
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
            <DefaultInfor>
                <li>{targetdata.title} · </li>
                <li>{targetdata.period} · </li>
                <li>{targetdata.contribution}</li>
            </DefaultInfor>

            <MainCopy>
                {targetdata.description}
            </MainCopy>

            <DefaultInfor>
                {targetdata.hashtags.map((tag,idx)=>(
                    <HashTag key={`${tag}-${idx}`}>{tag}</HashTag>
                ))}
            </DefaultInfor>

            <div>
                {targetdata.skills.map((skill,idx)=>(
                    <span key={`${skill}-${idx}`}>{skill}</span>
                ))}
            </div>
            <LinkButtonContainer>
                <a href="">깃헙</a>
                <a href="">페이지보기</a>
            </LinkButtonContainer>
        </>
    )
}