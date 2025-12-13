import Logo from "../../common/Logo"
import styled from "styled-components"


const SlidesContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 6.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: end;
    gap: 8px;
`
const LogoSide = styled.span`
    font-family: 'BebasNeue';
    font-size: 1.7rem;
    color: var(--white_color);
`
const MainCopy = styled.p`
    margin-top: 2px;
    font-family: 'NotoSerifKR_Bold';
    font-size: 3rem;
    color: var(--white_color);
`
const SubCopy = styled.p`
    margin-top: 25px;
    font-family: 'NotoSerifKR_Medium';
    font-size: 1.8rem;
    color: var(--white_color);
`
const Button = styled.a`
    display: inline-block;
    padding: 8px 30px;
    font-size: 1.6rem;
    background: var(--white_color);
    border-radius: 10px;
    margin-top: 40px;
`
export default function Slides({maincopy, subcopy, button, link}) {
    return(
        <SlidesContainer>
            <LogoContainer>
                <Logo fonts={'3.7rem'} />
                <LogoSide>ORIGINAL PORTFOLIO</LogoSide>
            </LogoContainer>
            <MainCopy>
                {maincopy}
            </MainCopy>
            <SubCopy>
                {subcopy}
            </SubCopy>
            {button && <Button href={link}>{button}</Button> }
        </SlidesContainer>
    )
}