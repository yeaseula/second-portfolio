import TabHeader from "./TabHeader"
import TabBody from "./TabBody"
import { RefObject, useState, useEffect } from "react"
import { TabContent } from "../../../types/portfolio"



export default function TabContents({contentsId, targetRef,tabContent}:{contentsId:string | null,tabContent:TabContent, targetRef:RefObject<HTMLDivElement | null>}) {

    const [activeTab,setActiveTab] = useState<number>(1)

    useEffect(() => {
        if (targetRef.current) {
        const storedScrollTop = localStorage.getItem(`scroll_${contentsId}`);
            if (storedScrollTop) {
                targetRef.current.scrollTop = parseInt(storedScrollTop, 10);
            }
        }
    }, [contentsId]);

    return (
        <>
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabBody activeTab={activeTab} tabContent={tabContent}/>
        </>
    )
}