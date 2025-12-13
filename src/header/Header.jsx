import styled from "styled-components"
import Navigation from "./Navigation"

const HeaderCont = styled.header`
    padding: 20px 0;
    width: 100%;
    display: flex;
    gap: 4rem;
    justify-content: start;
    align-items: center;
`
const Logo = styled.p`
    font-family: 'BebasNeue';
    font-size: 5.2rem;
    color: var(--main_color) ;
    line-height: 1;
`

export default function Header () {
    return (
        <HeaderCont>
            <h1 className="sr-only">김예슬의 포트폴리오</h1>
            <Logo>YEFLIX</Logo>
            <Navigation></Navigation>
        </HeaderCont>
    )
}