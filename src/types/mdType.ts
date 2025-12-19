import { TabContent } from "./portfolio"

export const parseMarkdownByTab = (md: string): TabContent => {
    const result: TabContent = {}
    const regex = /##\s(\w+)[\s\S]*?(?=##\s\w+|$)/g

    let match
    while ((match = regex.exec(md)) !== null) {
        const key = match[1]
        const content = match[0].replace(`## ${key}`, '').trim()
        result[key as keyof TabContent] = content
    }

    return result
}
