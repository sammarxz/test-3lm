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
        --color-light: #f0f4fc;
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

    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        margin: 0;
    }

    button, select {
        text-transform: none;
    }

    button, input {
        overflow: visible;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--color-text);
        opacity: 1;
    }
      
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--color-text);
    }
      
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--color-text);
    }

    .bg--primary {
        background-color: var(--color-primary);
    }

    .bg--white {
        background-color: white;
    }

    .bg--transparent {
        background-color: transparent;
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

    .bc--transparent {
        border-color: transparent;
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

    .td--underline {
        text-decoration: underline;
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

    .jc--center {
        justify-content: center;
    }

    .ai--center {
        align-items: center;
    }

    .m--0 {
        margin: 0;
    }

    .mr--small {
        margin-right: 4px;
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