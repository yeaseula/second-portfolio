import styled from "styled-components";
import Button from "../Button";
import { projectInforType } from "../../types/dataType";
import { usePosterModal } from "../../hook/useModal";
import Modal from "../Modal";
import ProjectDetail from "../../main/detail/ProjectDetail";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"

const PosterList = styled(motion.div)`
    position: relative;
    z-index: 3;
    max-width: 302px;
    width: 100%;
`

const HoverContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
`

export default function PostCard({ data }: {data:projectInforType}) {
    const {
        moreview,contentId,selected,
        showMore,hideMore,
        openModal, closeModal
    } = usePosterModal()

    return (
        <>
        <motion.div layout>
            <PosterList
            tabIndex={0}
            onMouseEnter={showMore}
            onMouseLeave={hideMore}
            onFocus={showMore}
            onBlur={hideMore}
            layoutId={data.contentsId}
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
            {moreview &&
            <motion.div
                initial={{
                    position: 'absolute', top: 0, left: 0 ,
                    width: '100%',height:'100%',
                    opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <HoverContainer
                role="button"
                aria-hidden={!moreview}
                >
                <motion.div layout>
                    <Button
                    type="button"
                    onClick={()=>{
                        openModal(data.contentsId)
                    }}
                    >자세히 보기</Button>
                </motion.div>
                </HoverContainer>
            </motion.div>
            }
            </PosterList>
            </motion.div>

            <AnimatePresence>
            {selected === data.contentsId &&
            <Modal onClick={() => closeModal()}>
                <motion.div
                    layoutId={selected || ""}
                    style={{
                        position: 'relative',
                        zIndex:10,
                        height: 'calc(100vh - 100px)',
                        maxWidth: '850px',
                        width: '100%',
                        overflowY: 'auto'
                    }}
                >
                    <ProjectDetail contentsId={contentId}/>
                </motion.div>
            </Modal>
            }
            </AnimatePresence>
        </>
    )
}