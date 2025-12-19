import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm"

export default function ActiveOne({tabContent}:{tabContent:string | undefined}) {
    if(tabContent) {
        return (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {tabContent}
            </ReactMarkdown>
        )
    }
    return (
        <p>상세설명이 없습니다.</p>
    )
}