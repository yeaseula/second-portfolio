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
        font-size: 1.8rem;
        margin: 15px 0 10px 0;
        padding-bottom: 10px;
    }
    h4 {
        margin: 15px 0 10px 0;
    }
    h5 {
        font-size: 1.7rem;
        font-weight: 700;
        margin: 10px 0 6px 0;
    }
    hr { margin-top: 10px; }
    ul {
        display: grid;
        gap: 7px;
        strong {
            display: block;
            margin-bottom: 4px;
        }
    }

    li:has(>img) {
        display: flex;
        align-items: center;
        background-color: #fff;
        margin: 5px 0;
    }
    li > img {
        width: 50%;
    }
    p:has(>a) {
        margin-top: 20px;
    }
    em { color: var(--main_right_color); }
    blockquote {
        margin-bottom: 20px;
        p {
            display: grid;
            color: #bdbdbd;
            font-size: 1.3rem;
        }
        strong {
            font-size: 1.6rem;
            color: var(--white_color);
        }
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