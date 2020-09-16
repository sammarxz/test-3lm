import styled from 'styled-components';

export const Input = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    background-image: none;
    border: none;
    border-radius: 4px;
    color: var(--color-text);
    display: block;
    height: 1.8rem;
    line-height: 1.2rem;
    max-width: 100%;
    outline: 0;
    padding: 0;
    position: relative;
    width: 100%;

    &:focus {
        background-color: var(--color-light);
        padding: 16px 8px;
    }
`;