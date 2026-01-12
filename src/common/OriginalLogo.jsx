import styled from "styled-components"

const LogoText = styled.p`
    font-family: 'BebasNeue';
    font-size: ${(p)=>p.fonts};
    line-height: 1;
    > span {
        font-family: 'BebasNeue';
        color: var(--main_color) ;
    }
`

export default function OriginalLogo({fonts}) {
    return(
        <LogoText fonts={fonts}>Project</LogoText>
    )
}