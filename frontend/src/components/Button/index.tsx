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
    onClick?: Function
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
        if (color) { className += ` bg--${color} `};
        if (textColor) { className += `c--${textColor} `};
        if (borderColor) { className += `bc--${borderColor} `};
        if (size) { className += `is--${size} `};
        return className;
    }

    const handleClick: React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
    > = e => {
        if (onClick) onClick(e);
    };

    return (
        <Btn 
            className={handleCreateClassName(props)}
            onClick={(e) => handleClick(e)}
            disabled={disabled}
        >
            {children}
        </Btn>
    )
}

export default Button;