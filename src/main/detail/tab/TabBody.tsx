import styled from "styled-components"
import ActiveOne from "../activeTab/ActiveOne"
import ActiveTwo from "../activeTab/ActiveTwo"
import ActiveThree from "../activeTab/ActiveThree"
import ActiveFour from "../activeTab/ActiveFour"

const Container = styled.div`
    padding-top: 40px;
    > p {
        font-size: 1.8rem;
    }
`

export default function TabBody({activeTab}:{activeTab:number}) {

    if(activeTab === 1) {
        return (
            <Container>
                <ActiveOne></ActiveOne>
            </Container>
        )
    }
    if(activeTab === 2) {
        return (
            <Container>
                <ActiveTwo></ActiveTwo>
            </Container>
        )
    }
    if(activeTab === 3) {
        return (
            <Container>
                <ActiveThree></ActiveThree>
            </Container>
        )
    }
    if(activeTab === 4) {
        return (
            <Container>
                <ActiveFour></ActiveFour>
            </Container>
        )
    }
    return (
        <></>
    )
}