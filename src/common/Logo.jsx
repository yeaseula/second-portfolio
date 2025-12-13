import styled from "styled-components"

const LogoText = styled.p`
    font-family: 'BebasNeue';
    font-size: ${(p)=>p.fonts};
    color: var(--main_color) ;
    line-height: 1;
`

export default function Logo({fonts}) {
    return (
        <LogoText fonts={fonts}>YEFLIX</LogoText>
    )
}