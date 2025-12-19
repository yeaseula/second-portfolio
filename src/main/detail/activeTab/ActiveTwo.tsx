import styled from "styled-components"
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm"

const Container = styled.div`
    h3 {
        margin: 25px 0 15px 0;
        display: inline-block;
        box-shadow: inset 0 -8px 0 var(--main_color); }
    h3:first-of-type { margin-top: 0; }
    ul {
        li { margin-bottom: 5px }
        li:last-of-type { margin-bottom: 0; }
        li strong {
            display: block;
            text-shadow: 0 1px 2px var(--main_color)
        }
    }
`

export default function ActiveTwo({tabContent}: {tabContent:string | undefined}) {
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