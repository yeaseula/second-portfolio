import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm"

export default function ActiveThree({tabContent}:{tabContent: string | undefined}) {
    if(tabContent) {
        return (
            <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {tabContent}
            </ReactMarkdown>
            </div>
        )
    }
    return (
        <p>상세설명이 없습니다.</p>
    )
}