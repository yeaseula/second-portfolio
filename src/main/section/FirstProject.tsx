import styled from "styled-components"
import OriginalLogo from "../../common/OriginalLogo"
import Button from "../../common/Button"
import { useState } from "react"
import Modal from "../../common/Modal"
import ProjectDetail from "../detail/ProjectDetail"

const PosterWrap = styled.article`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 20px;
`
const PosterList = styled.div`
    position: relative;
    max-width: 302px;
    aspect-ratio: 3/ 4;
    width: 100%;
`
const HoverContainer = styled.div<{$moreview:boolean}>`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    opacity: ${(p)=>p.$moreview ? 1 : 0};
    z-index: ${(p)=>p.$moreview ? 10 : -99};
    background-color: rgba(0,0,0,0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
`

export default function FirstProject() {

    const [moreview,setMoreView] = useState(false)
    const [modal,setModal] = useState(false)
    const [contentsId,setContentsId] = useState<string | null>(null)

    return (
        <section style={{ marginTop: '80px' }}>
            <OriginalLogo fonts={'3rem'}/>
            <PosterWrap>
                <PosterList
                tabIndex={0}
                onMouseEnter={()=>setMoreView(true)}
                onMouseLeave={()=>setMoreView(false)}
                onFocus={()=>setMoreView(true)}
                onBlur={(e)=>{
                    if(!e.currentTarget.contains(e.relatedTarget)) {
                        setMoreView(false)
                    }
                }}
                >
                <figure>
                    <img
                        src="/image/poster_bookdam_302.webp"
                        srcSet="/image/poster_bookdam_604.webp"
                        alt="책담 시즌2 포스터"
                        loading="lazy"
                        width={302}
                        height={403}
                    />
                    <figcaption className="sr-only">
                        책담 서비스 시즌2 공식 포스터 - 아늑한 분위기의 도서관 풍경
                    </figcaption>
                </figure>

                <HoverContainer
                role="button"
                aria-hidden={!moreview}
                $moreview={moreview}>
                    <Button
                    type="button"
                    onClick={()=>{
                        setModal(true);
                        setContentsId('bookdam2')
                    }}
                    >
                        자세히 보기
                    </Button>
                </HoverContainer>

                </PosterList>
            </PosterWrap>
            {modal &&
                <Modal onClick={()=>{setModal(false)}}>
                    <ProjectDetail contentsId={contentsId}/>
                </Modal>
            }
        </section>
    )
}