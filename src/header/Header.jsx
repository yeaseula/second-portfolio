import styled from "styled-components"
import Navigation from "./Navigation"
import Logo from "../common/Logo"

const HeaderCont = styled.header`
    padding: 20px 0;
    width: 100%;
    display: flex;
    gap: 4rem;
    justify-content: start;
    align-items: center;
`

export default function Header () {
    return (
        <HeaderCont>
            <h1 className="sr-only">김예슬의 포트폴리오</h1>
            <Logo fonts={'5.2rem'}/>
            <Navigation />
        </HeaderCont>
    )
}