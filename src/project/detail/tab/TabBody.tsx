import styled from "styled-components"
import ActiveOne from "../activeTab/ActiveOne"
import ActiveTwo from "../activeTab/ActiveTwo"
import ActiveThree from "../activeTab/ActiveThree"
import ActiveFour from "../activeTab/ActiveFour"
import { TabContent } from "../../../types/portfolio"
import "../style/Detail.css"

const Container = styled.div`
    padding-top: 40px;
    > p {
        font-size: 1.8rem;
    }
`

export default function TabBody({activeTab,tabContent}:
    { activeTab:number, tabContent:TabContent}) {

    if(activeTab === 1) {
        return (
            <Container>
                <ActiveOne tabContent={tabContent.description} />
            </Container>
        )
    }
    if(activeTab === 2) {
        return (
            <Container>
                <ActiveTwo tabContent={tabContent.skills || tabContent.skillPoint} />
            </Container>
        )
    }
    if(activeTab === 3) {
        return (
            <Container>
                <ActiveThree tabContent={tabContent.trouble} />
            </Container>
        )
    }
    if(activeTab === 4) {
        return (
            <Container>
                <ActiveFour tabContent={tabContent.retrospect} />
            </Container>
        )
    }
    return (
        <></>
    )
}