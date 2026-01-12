import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    html {
        font-size: 10px;
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        background-color: var(--background_color);
        //color: var(--white_color);
    }
    #root {
        overflow: hidden
    }
`