import styled from "styled-components"
import DetailTop from "./DetailTop"
import TabContents from "./TabContents"
import { memo } from "react"

const ModalComponent = styled.section`
    max-width: 800px;
    height: calc(100vh - 100px);
    width: 100%;
    overflow-y: auto;
    border-radius: 12px;
    background-color: #424242;
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    color: #fff;
`
const VideoContainer = styled.div`
    width: 100%;
    height: 350px;
    background: skyblue;
`
const DescriptionContainer =styled.div`
    position: relative;
    padding: 30px;
`

const ProjectDetail = memo(()=>{
    return(
        <ModalComponent>
            <h2 className="sr-only">상세 설명</h2>
            <VideoContainer>동영상 영역</VideoContainer>
            <DescriptionContainer>
                <DetailTop />
                <TabContents />
            </DescriptionContainer>
        </ModalComponent>
    )
})

export default ProjectDetail