import TabHeader from "./TabHeader"
import TabBody from "./TabBody"
import { useState } from "react"
import { TabContent } from "../../../types/portfolio"

export default function TabContents({tabContent}:{tabContent:TabContent}) {

    const [activeTab,setActiveTab] = useState<number>(1)

    return (
        <>
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabBody activeTab={activeTab} tabContent={tabContent}/>
        </>
    )
}