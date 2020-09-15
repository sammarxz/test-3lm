import React from 'react';

import { ContainerWrapper } from './styles';

type containerProps = {
    children: React.ReactNode,
    className: string
};

const Container:React.FC<containerProps> = ({ className, children }) => {
    return <ContainerWrapper className={className}>{ children }</ContainerWrapper>
}
export default Container;