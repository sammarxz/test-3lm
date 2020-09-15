import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 16px;
    }
  
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }
    
    ol, ul {
        list-style: none;
    }
    
    img {
        max-width: 100%;
        height: auto;
    }

    :root {
        --color-primary: #3028B2;
        --color-text: #231E60;
        --color-lightText: #A0AAC8;
        --color-light: #E1EAF9;
    }

    body {
        color: var(--color-text);
        font-family: 'Open Sans', sans-serif;
        line-height: 1.5;
        font-weight: 400;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    .bg--primary {
        background-color: var(--color-primary);
    }

    .bg--white {
        background-color: white;
    }

    .c--white {
        color: white;
    }

    .c--primary {
        color: var(--color-primary);
    }

    .c--lightText {
        color: var(--color-lightText);
    }

    .bc--primary {
        border-color: var(--color-primary);
    }

    .fw--semiBold {
        font-weight: 600;
    }

    .fw--normal {
        font-weight: 400;
    }

    .fs--small {
        font-size: .7rem;
    }

    .fs--normal {
        font-size: 1rem;
    }

    .fs--medium {
        font-size: 1.2rem;
    }

    .fs--big {
        font-size: 1.4rem;
    }

    .lh--1 {
        line-height: 1;
    }

    .d--inlineBlock {
        display: inline-block;
    }

    .d--block {
        display: block;
    }

    .d--flex {
        display: flex;
    }

    .d--grid {
        display: grid;
    }

    .jc--spaceBetween {
        justify-content: space-between;
    }

    .ai--center {
        align-items: center;
    }

    .m--0 {
        margin: 0;
    }

    .mr--normal {
        margin-right: 8px;
    }

    .mr--medium {
        margin-right: 16px;
    }

    .mr--big {
        margin-right: 24px;
    }

    .ml--normal {
        margin-left: 8px;
    }

    .ml--medium {
        margin-left: 16px;
    }

    .ml--big {
        margin-left: 24px;
    }

    .mb--normal {
        margin-bottom: 8px;
    }

    .mb--medium {
        margin-bottom: 16px;
    }

    .mb--big {
        margin-bottom: 24px;
    }

    .mt--normal {
        margin-top: 8px;
    }

    .mt--medium {
        margin-top: 16px;
    }

    .mt--big {
        margin-top: 24px;
    }
`;

export default GlobalStyle;