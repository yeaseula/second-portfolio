import styled from "styled-components"

const LogoText = styled.p`
    font-family: 'Pretendard_SemiBold';
    font-size: ${(p)=>p.fonts};
    color: var(--white_color) ;
    line-height: 1.6;
`

export default function Logo({fonts, text}) {
    return (
        <LogoText fonts={fonts}>{text}</LogoText>
    )
}