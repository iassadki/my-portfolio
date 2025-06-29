import React from 'react';

interface ButtonSecondaryProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    id?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
    children,
    onClick,
    href,
    type = 'button',
    disabled = false,
    className = '',
    id,
}) => {
    const baseClasses = `
    bg-action text-primary
    px-7 py-3 
    rounded-full
    border-2
    border-primary
    text-sm font-bold
    hover:bg-action 
    hover:text-primary
    focus:outline-none 
    focus:ring-2 
    focus:ring-primary 
    focus:ring-offset-2 
    transition-all 
    duration-200 
    transform 
    hover:scale-105
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

    if (href) {
        return (
            <a
                href={href}
                className={baseClasses}
                id={id}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={baseClasses}
            id={id}
        >
            {children}
        </button>
    );
};

export default ButtonSecondary;