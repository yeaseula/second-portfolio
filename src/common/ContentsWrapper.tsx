import React from "react"
import styled from "styled-components"

const PosterWrap = styled.article`
    width: 100%;
    margin-top: 20px;
`

export default function ContentsWrapper({
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