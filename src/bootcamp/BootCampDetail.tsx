import styled from "styled-components";
import { memo, useEffect,useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm"
import ReactFocusLock from "react-focus-lock";

export default function BootCampDetail({layoutId}:{layoutId:string}) {
    const [targetData,setTargetData] = useState()
    useEffect(()=>{
        if(!layoutId) return

        import(`../data/bootcamp-content/${layoutId}.md?raw`).then((module) => {
            setTargetData(module.default)
        })

    },[layoutId])

    return (
        <>
        <ReactFocusLock>
        <Container>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {targetData}
        </ReactMarkdown>
        </Container>
        </ReactFocusLock>
        </>
    )
}

const Container = styled.div`
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.7rem;
        margin: 15px 0 10px 0;
    }
    ul {
        display: grid;
        gap: 7px;
        margin: 5px 0 10px 0;
    }
    p:has(>a) {
        margin-top: 20px;
    }

    a {
        background-color: var(--main_color);
        display: inline-block;
        padding: 4px 12px;
        border-radius: 5px;
        font-size: 1.2rem;
        transition: all 0.3s;
        &:hover {
            transform: translateY(-2px);
        }
    }
`