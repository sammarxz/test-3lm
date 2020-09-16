import styled from 'styled-components'

export const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
    width: 100%;

    td,
    th {
        border-bottom: 1px solid var(--color-light);
        padding: 16px 8px;
    }
`;