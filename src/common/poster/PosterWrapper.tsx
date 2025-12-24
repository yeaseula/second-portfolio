import styled from "styled-components"
import OriginalLogo from "../OriginalLogo"
import React from "react"

const PosterWrap = styled.article`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 20px;
`

export default function PosterWrapper({children}: {children: React.ReactNode}) {

    return (
        <section style={{ marginTop: '80px' }}>
            <OriginalLogo fonts={'3rem'}/>
            <PosterWrap>
                {children}
            </PosterWrap>
        </section>
    )
}