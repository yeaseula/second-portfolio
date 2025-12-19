import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm"

const Container = styled.div`
    font-size: 1.8rem;
    strong {
        text-shadow: 0 1px 2px var(--main_color)
    }
`

export default function ActiveOne({tabContent}:{tabContent:string | undefined}) {
    if(tabContent) {
        return (
            <Container>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {tabContent}
            </ReactMarkdown>
            </Container>
        )
    }
    return (
        <p>상세설명이 없습니다.</p>
    )
}