import React from 'react';

import {Button as Btn} from './styles';

type buttonProps = {
    color: string,
    textColor: string,
    size: string,
    borderColor: string,
    children: React.ReactNode,
    className?: any,
    disabled?: boolean,
    onClick: Function
};

const Button:React.FC<buttonProps> = ({
        className, 
        children, 
        disabled,
        onClick,
        ...props
    }) => {

    const handleCreateClassName = (
        {color, textColor, borderColor, size}: {
            color:string | 'white', 
            textColor:string | 'primary', 
            borderColor:string | 'primary',
            size:string | 'normal' 
        }
    ) => {
        let classNames = '';
        if (color) { classNames += `bg--${color} `};
        if (textColor) { classNames += `c--${textColor} `};
        if (borderColor) { classNames += `bc--${borderColor} `};
        if (size) { classNames += `is--${size} `};
        return classNames;
    }

    return (
        <Btn 
            className={handleCreateClassName(props)}
            onClick={(e) => onClick(e)}
            disabled={disabled}
        >
            {children}
        </Btn>
    )
}

export default Button;