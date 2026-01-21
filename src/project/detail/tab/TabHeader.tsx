import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

const TabHead = styled.div`
    margin-top: 40px;
    display: flex;
`
const TabInner = styled.div`
    flex: 1;
`
const TabButton = styled.button<{$active:boolean}>`
    width: 100%;
    background: transparent;
    font-size: 1.8rem;
    padding: 6px 0;
    box-shadow: none;
    border: none;
    border-bottom: ${(p)=>p.$active ? '3px solid var(--main_color)' : 'none'};
    cursor: pointer;
    color: var(--main_color);
    font-family: ${(p)=>p.$active ? 'Pretendard_Bold' : 'initial'};
    &:hover {

    }
`

interface HeadProps {
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
    tabcontent: {id:number, title: string}[]
}


export default function TabHeader({activeTab,setActiveTab,tabcontent}:HeadProps) {

    return (
        <TabHead>
            {tabcontent.map((tab)=>(
                <TabInner key={`${tab.id}-${tab.title}`}>
                    <TabButton
                    $active={activeTab === tab.id}
                    onClick={()=>setActiveTab(tab.id)}
                    >{tab.title}</TabButton>
                </TabInner>
            ))}
        </TabHead>
    )
}