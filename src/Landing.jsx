import styled from "styled-components"

const LandingContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.p`
    font-family: 'BebasNeue';
    font-size: 11rem;
    color: var(--main_color) ;
    text-shadow:
    0 0 5px #fff,
    0 0 8px #fff,
    0 0 12px #fff,
    0 0 5px #0FFF50 ,
    0 0 12px #0FFF50 ,
    0 0 18px #0FFF50 ,
    0 0 24px #0FFF50 ,
    0 0 28px #0FFF50 ;
`

export default function Landing() {
    return (
        <LandingContainer>
            <Logo className='logo'>YEFLIX</Logo>
        </LandingContainer>
    )
}