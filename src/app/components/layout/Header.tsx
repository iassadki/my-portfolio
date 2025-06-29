"use client";

import Link from 'next/link';
import ButtonPrimary from '../ui/ButtonPrimary';

const Header = () => {
    return (
        <header className="grid grid-cols-3 items-center px-6 py-4 bg-white">
            {/* Logo */}
            <div className="logo">
                <Link href="/" className="text-xl font-bold text-primary hover:text-primary-600 transition-colors">
                    1601
                </Link>
            </div>

            {/* Navigation - centered */}
            <nav className="justify-self-center">
                <ul className="flex list-none m-0 p-0 font-medium text-black">
                    <li>
                        <Link href="/" className="text-decoration-none transition-colors hover:text-primary">
                            Présentation
                        </Link>
                    </li>
                    <li className="ml-6">
                        <Link href="/presentation" className="text-decoration-none transition-colors hover:text-primary">
                            Expertise
                        </Link>
                    </li>
                    <li className="ml-6">
                        <Link href="/projets" className="text-decoration-none transition-colors hover:text-primary">
                            Projets
                        </Link>
                    </li>
                    <li className="ml-6">
                        <Link href="/methode" className="text-decoration-none transition-colors hover:text-primary">
                            CV
                        </Link>
                    </li>
                    <li className="ml-6">
                        <Link href="/contact" className="text-decoration-none transition-colors hover:text-primary">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Button container */}
            <div className="justify-self-end">
                <ButtonPrimary>Me contacter</ButtonPrimary>
            </div>
        </header>
    );
};

export default Header;