"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ButtonPrimary from "../ui/ButtonPrimary";
import { useActiveSection } from "../../hooks/useActiveSection";
import fields from "@/app/data/fields.json";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection();
    const { header } = fields;

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { href: "#projects", label: "Projets", id: "projects" },
        { href: "#expertise", label: "Services", id: "expertise" },
        { href: "#experiences", label: "Expériences", id: "experiences" },
        { href: "#skills", label: "Compétences", id: "skills" },
        { href: "#contact", label: "Contact", id: "contact" },
        { href: "/cv", label: "CV", id: "resume" },
    ];

    return (
        <header className="fixed left-1/2 top-7 z-50 w-[calc(100%-48px)] -translate-x-1/2 max-w-[1400px]">
            <div className="flex min-h-[82px] items-center justify-between rounded-full border-2 border-[#CBC1FF] bg-action px-8 py-3 shadow-[0_2px_0_rgba(78,68,104,0.08)]">
                <Link href="/" className="flex items-center justify-center text-primary transition-opacity hover:opacity-90" aria-label="Accueil">
                    <Image
                        src={header.imagePath}
                        alt="Accueil"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                        priority
                        unoptimized
                    />
                </Link>

                <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`whitespace-nowrap text-[16px] font-medium xl:text-[18px] transition-colors ${
                                activeSection === link.id ? "text-primary" : "text-black/60"
                            } hover:text-primary`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <ButtonPrimary href="#contact" className="whitespace-nowrap !bg-primary !border-primary !text-white !px-7 !py-2.5 !text-[16px] !font-bold !shadow-none hover:!brightness-90">
                        Me contacter
                    </ButtonPrimary>
                </div>

                <button
                    className="text-primary lg:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="mt-3 space-y-3 rounded-3xl border-2 border-[#CBC1FF] bg-action p-4 lg:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-2 py-1 text-lg transition-colors ${
                                activeSection === link.id ? "text-primary font-semibold" : "text-black/60"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <ButtonPrimary href="#contact" onClick={() => setIsOpen(false)} className="!bg-primary !border-primary !text-white !px-6 !py-3 !text-base !font-bold hover:!brightness-90">
                            Me contacter
                        </ButtonPrimary>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
