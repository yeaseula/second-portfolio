import styled from "styled-components"

const CommonContainer = styled.div`
    max-width: 1510px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
`

export default function Container({children}) {
    return <CommonContainer>{children}</CommonContainer>
}