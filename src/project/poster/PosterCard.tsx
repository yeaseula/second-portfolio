import styled from "styled-components";
import Button from "../../common/Button";
import { projectInforType } from "../../types/portfolio";
import { usePosterModal } from "../../hook/useModal";
import Modal from "../../common/Modal";
import ProjectDetail from "../detail/ProjectDetail";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"

const PosterList = styled(motion.div)`
    position: relative;
    z-index: 3;
    width: 100%;
`

const HoverContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
`
const HashTag = styled.span`
    border-radius: 50px;
    background-color: pink;
    font-size: 1.4rem;
    color: #000000;
    padding: 1px 10px;
`
export default function PostCard({ data }: {data:projectInforType}) {
    const {
        moreview,contentId,selected,
        showMore,hideMore,
        openModal, closeModal
    } = usePosterModal()

    return (
        <>
        {/* <motion.div layout style={{ marginBottom: '25px' }}>
            <PosterList
            tabIndex={0}
            onMouseEnter={showMore}
            onMouseLeave={hideMore}
            onFocus={showMore}
            onBlur={hideMore}
            layoutId={data.contentsId}
            >
                <div className="w-full flex gap-8">
                    <figure>
                        <img
                            src={data.src}
                            srcSet={data.srcSet}
                            alt={data.alt}
                            loading="lazy"
                            width={200}
                            height={303}
                        />
                        <figcaption className="sr-only">
                            {data.srOnly}
                        </figcaption>
                    </figure>
                    <div className="pt-4">
                        <p className="flex gap-1.5 mb-5">
                            <span className="font-bold">{data.title}</span>
                            <span>·</span>
                            <span>{data.period}</span>
                            <span>·</span>
                            <span>{data.contribution}</span>
                        </p>
                        <div className="flex gap-2.5 mb-8">{data.skills.map((ele)=>(
                            <HashTag key={ele}>{ele}</HashTag>
                        ))}</div>
                        <div>
                            {data.description.map((ele)=>(
                                <p key={ele.id}>{ele.des}</p>
                            ))}
                        </div>
                    </div>
                </div>
            <motion.div
                style={{
                    position: 'absolute', top: 0, left: 0 ,
                    width: '100%',height:'100%',
                    opacity: moreview ? 1 : 0,
                    transition: 'all 0.25s'
                }}
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

            </PosterList>
            </motion.div>

            <AnimatePresence>
            {selected === data.contentsId &&
            <Modal onClick={() => closeModal()}>
                <motion.div
                    layoutId={selected || ""}
                    style={{
                        position: 'relative',
                        zIndex: 30,
                        height: 'calc(100vh - 100px)',
                        maxWidth: '850px',
                        width: '100%',
                        overflowY: 'auto',
                        borderRadius: '12px'
                    }}
                >
                    <ProjectDetail contentsId={contentId}/>
                </motion.div>
            </Modal>
            }
            </AnimatePresence> */}
        </>
    )
}