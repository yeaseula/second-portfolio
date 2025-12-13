import styled from "styled-components"

const NavContainer = styled.ul`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: cetner;
`
const NavCont = styled.a`
    display: inline-block;
    padding: 4px 22px;
    background: var(--white_color);
    border-radius: 500px;
    font-size: 1.6rem;
    font-family: ${(p)=>p.$main && 'BebasNeue'}
`

const NAVIGATION_ITEMS = [
{
    name: "Ye's Original",
    main: true,
},{
    name: "개인 프로젝트",
    main: false,
},{
    name: "부트캠프",
    main: false
},{
    name: "활동",
    main: false
}]

export default function Navigation () {
    return (
        <NavContainer>
            {NAVIGATION_ITEMS.map((nav,idx)=>(
            <li key={`${nav}-${idx}`}>
                <NavCont href="" $main={nav.main}>
                    {nav.name}
                </NavCont>
            </li>
            ))}
        </NavContainer>
    )
}