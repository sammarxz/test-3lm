import React, { InputHTMLAttributes } from 'react';

import { Input as I } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
};

const Input:React.FC<InputProps> = (props) => { 
    return (
        <div>
            <I {...props} />
        </div>
    )
};

export default Input;