import styled from 'styled-components';

export const Button = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff;
    border: 1px solid currentColor;
    border-radius: 4px;
    color: #5755d9;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background .2s,border .2s,box-shadow .2s,color .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    &.is--small {
        padding: 4px 8px;
    }

    &--normal {
        padding: 8px;
    }

    &--big {
        padding: 16px 24px;
    }

    &.is--icon {
        width: 32px;
        height: 32px;
        padding: 0;
    }

    &.is--full {
        width: 100%;
    }
`;