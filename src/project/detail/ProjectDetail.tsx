import styled from "styled-components"
import { useParams } from "react-router-dom"
import ContentsWrapper from "../../common/ContentsWrapper"
import DetailTop from "./DetailTop"
import TabContents from "./tab/TabContents"
import { memo, useEffect, useRef, useState } from "react"
import { portfolio } from "../../data/portfolio"
import { AllPortfolioTypes } from "../../types/portfolio"
import { parseMarkdownByTab } from "../../types/mdType"


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

    const { id } = useParams()

    const tabRef = useRef<HTMLDivElement>(null)

    const [targetdata,setTargetData] = useState<AllPortfolioTypes>({
        topDataType: null,
        tapDataType: null,
    })

    useEffect(()=>{
        if(!id) return
        const target = portfolio.find((val)=>val.id === id);
        if(!target) return
        import(`../../data/portfolio-content/${id}.md?raw`).then((module) => {
            const parsed = parseMarkdownByTab(module.default)
            setTargetData({
                topDataType: target,
                tapDataType: parsed
            })
        })

    },[id])

    if(!targetdata.topDataType || !targetdata.tapDataType) {
        return (
            <>데이터 로드중</>
        )
    }

    return(
        <ContentsWrapper>
        <>
            <h2 className="sr-only">상세 설명</h2>
            <VideoContainer>동영상 영역</VideoContainer>
            <DescriptionContainer>
                <DetailTop targetdata={targetdata.topDataType}/>
                <TabContents contentsId={id} targetRef={tabRef} tabContent={targetdata.tapDataType}/>
            </DescriptionContainer>
        </>
        </ContentsWrapper>
    )
})

export default ProjectDetail