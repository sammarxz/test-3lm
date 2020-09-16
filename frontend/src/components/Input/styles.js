import styled from 'styled-components';

export const Input = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    background-image: none;
    border: 1px solid transparent;
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
    transition: border-color .3s ease;

    &:focus,
    &.is--filled {
        background-color: var(--color-light);
        border-color: var(--color-lightText);
        padding: 8px 16px;
        height: auto;

        &:focus {
            border-color: var(--color-primary);
        }
    }
`;