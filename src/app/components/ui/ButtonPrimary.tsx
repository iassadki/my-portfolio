import React from 'react';
import Link from 'next/link';

interface ButtonPrimaryProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    id?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    children,
    onClick,
    href,
    target = '_self',
    rel,
    type = 'button',
    disabled = false,
    className = '',
    id,
}) => {
    const baseClasses = `
    bg-primary text-white
    px-7 py-3 
    rounded-full
    border-1
    border-primary
    text-sm font-bold
    hover:bg-primary 
    hover:text-white
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

    // Liens internes (pages et ancres) : next/link gère le scroll vers l'ancre après navigation
    if (href && (href.startsWith('/') || href.startsWith('#')) && target === '_self') {
        return (
            <Link
                href={href}
                onClick={onClick}
                className={baseClasses}
                id={id}
            >
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                onClick={onClick}
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

export default ButtonPrimary;