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
    screenReader,
    children
} : {
    title: React.ReactNode
    screenReader?: string;
    children: React.ReactNode}) {

    return (
        <section style={{ marginTop: '80px' }}>
            {title}
            <h2 className="sr-only">{screenReader}</h2>
            <PosterWrap>
                {children}
            </PosterWrap>
        </section>
    )
}