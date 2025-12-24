import styled from "styled-components"
import React from "react"

const PosterWrap = styled.article`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 20px;
`

export default function PosterWrapper({
    title,
    children
} : {
    title: React.ReactNode
    children: React.ReactNode}) {

    return (
        <section style={{ marginTop: '80px' }}>
            {title}
            <PosterWrap>
                {children}
            </PosterWrap>
        </section>
    )
}