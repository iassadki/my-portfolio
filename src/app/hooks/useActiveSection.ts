"use client";

import { useState, useEffect } from 'react';

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'presentation', 'expertise', 'skills', 'projects', 'experiences', 'resume', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset pour le header fixe

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        // Écouteur de scroll
        window.addEventListener('scroll', handleScroll);
        // Vérification initiale
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return activeSection;
};
