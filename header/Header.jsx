import styled from "styled-components"
import Navigation from "./Navigation"


const HeaderCont = styled.header`
    padding: 20px 0;
    width: 100%;
    display: flex;
    gap: 4rem;
    justify-content: start;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 50;
`

export default function Header () {
    return (
        <HeaderCont>
            <h1 className="sr-only">김예슬의 포트폴리오</h1>
            <a href="/introduce">Introduce</a>
            <a href="/teamwork">Teamwork Skills</a>
            <a href="/">Projects</a>
            <a href="">Technical Skills</a>
             {/* <Navigation /> */}
        </HeaderCont>
    )
}