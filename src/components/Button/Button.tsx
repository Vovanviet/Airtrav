import React from 'react';
type TButtonProps = {
    children : React.ReactNode,
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({children,className, ...props}: TButtonProps) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export default Button;