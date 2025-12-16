import TabHeader from "./TabHeader"
import TabBody from "./TabBody"
import { useState } from "react"

export default function TabContents() {

    const [activeTab,setActiveTab] = useState<number>(1)

    return (
        <>
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabBody activeTab={activeTab}/>
        </>
    )
}