import styled from "styled-components"
import DetailTop from "./DetailTop"
import TabContents from "./tab/TabContents"
import { memo, useEffect, useState } from "react"
import { portfolio } from "../../data/portfolio"
import { PortfolioType } from "../../types/portfolio"

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

const ProjectDetail = memo(({contentsId}:{contentsId:string | null})=>{

    const [ targetdata, setTargetData ] = useState<PortfolioType | null>(null)

    useEffect(()=>{
        if(!contentsId) return
        const target = portfolio.find((val)=>val.id === contentsId);
        if(!target) return
        setTargetData(target)
    },[contentsId])

    if(!targetdata) {
        return (
            <>데이터 로드중</>
        )
    }

    return(
        <ModalComponent>
            <h2 className="sr-only">상세 설명</h2>
            <VideoContainer>동영상 영역</VideoContainer>
            <DescriptionContainer>
                <DetailTop targetdata={targetdata}/>
                <TabContents />
            </DescriptionContainer>
        </ModalComponent>
    )
})

export default ProjectDetail