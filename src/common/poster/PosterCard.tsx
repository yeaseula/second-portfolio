import styled from "styled-components";
import Button from "../Button";
import { projectInforType } from "../../data/types/dataType";
import { usePosterModal } from "../../hook/useModal";
import Modal from "../Modal";
import ProjectDetail from "../../main/detail/ProjectDetail";

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
    transition: all 0.3s;
`

export default function PostCard({ data }: {data:projectInforType}) {
    const {
        moreview,modal,contentId,
        showMore,hideMore,
        openModal, closeModal
    } = usePosterModal()

    return (
        <>
            <PosterList
            tabIndex={0}
            onMouseEnter={showMore}
            onMouseLeave={hideMore}
            onFocus={showMore}
            onBlur={hideMore}
            >
            <figure>
                <img
                    src={data.src}
                    srcSet={data.srcSet}
                    alt={data.alt}
                    loading="lazy"
                    width={302}
                    height={403}
                />
                <figcaption className="sr-only">
                    {data.srOnly}
                </figcaption>
            </figure>

            <HoverContainer
            role="button"
            aria-hidden={!moreview}
            $moreview={moreview}>
                <Button
                type="button"
                onClick={()=>openModal(data.contentsId)}
                >
                    자세히 보기
                </Button>
            </HoverContainer>
            </PosterList>
            {modal &&
                <Modal onClick={closeModal}>
                    <ProjectDetail contentsId={contentId}/>
                </Modal>
            }
        </>
    )
}