import React from "react";
import styled from "styled-components"

const DefaultStyle = styled.a`
    display: inline-block;
    padding: 8px 30px;
    font-size: 1.6rem;
    background: var(--white_color);
    border-radius: 10px;
    margin-top: 40px;
`
const ButtonStyle = styled.button`
    display: inline-block;
    padding: 8px 30px;
    font-size: 1.6rem;
    background: var(--white_color);
    border-radius: 10px;
    margin-top: 40px;
    cursor: pointer;
`

interface ButtonProps {
    type?: "button" | "submit";
    href?: string;
    children: React.ReactNode;
    onClick: ()=>void;
}

export default function Button({type="button", href, children, onClick, ...rest}:ButtonProps) {

    if(href) {
        return <DefaultStyle href={href} {...rest}>{children}</DefaultStyle>
    }

    return (
        <ButtonStyle type={type} onClick={onClick} {...rest}>{children}</ButtonStyle>
    )
}