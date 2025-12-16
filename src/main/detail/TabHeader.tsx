import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

const TabHead = styled.ul`
    margin-top: 40px;
    display: flex;
`
const TabInner = styled.li`
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
`

interface HeadProps {
    activeTab: number;
    setActiveTab: Dispatch<SetStateAction<number>>;
}

const TABCONTENTS = [
    {
        id: 1,
        title: '상세설명',
    },
    {
        id: 2,
        title: '기술 선택 이유',
    },
    {
        id: 3,
        title: '트러블슈팅',
    },
    {
        id: 4,
        title: '회고',
    },
]

export default function TabHeader({activeTab,setActiveTab}:HeadProps) {

    return (
        <TabHead>
            {TABCONTENTS.map((tab)=>(
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