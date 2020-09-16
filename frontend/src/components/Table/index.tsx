import React, { PropsWithChildren } from 'react';

import { Table as TableWrapper } from "./styles";

type Props = {
    head: Array<string>
}

const Table: React.FC<PropsWithChildren<Props>> = ({ head, children }) => (
    <TableWrapper>
        <thead>
            <tr>
                {head.map((item:string) => (
                    <th key={item}>{ item }</th>    
                ))}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </TableWrapper>
);

export default Table;