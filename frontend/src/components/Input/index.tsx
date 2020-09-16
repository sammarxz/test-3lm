import React, { InputHTMLAttributes } from 'react';

import { Input as I } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
};

const Input:React.FC<InputProps> = (props) => { 
    return (
        <I {...props} />
    )
};

export default Input;