import Image from "next/image";
import React from 'react';
import fields from '@/app/data/fields.json';
import ButtonPrimary from '@/app/components/ui/ButtonPrimary';
import ButtonSecondary from '@/app/components/ui/ButtonSecondary';

const Presentation: React.FC = () => {
    const { presentation } = fields;

    return (
        <section className="px-8 pt-0 pb-16">
            {/* Titre de la page */}
            <h2 className="text-3xl font-bold text-black text-center mt-12 mb-12">
                {presentation.title}
            </h2>

            {/* Section principale avec photo et informations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Photo */}
                <div className="flex justify-center">
                    <Image
                        src={presentation.imagePath}
                        alt={presentation.name}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover bg-blue-50"
                    />
                </div>

                {/* Informations */}
                <div>
                    <div className="mb-4">
                        <h1 className="inline text-4xl font-bold text-primary mr-2">
                            {presentation.name}
                        </h1>
                        <h1 className="inline text-4xl font-bold text-black">
                            {presentation.surname}
                        </h1>
                    </div>
                    <p className="text-xl text-black mb-8">
                        &rarr; {presentation.description}
                    </p>
                    <div className="flex gap-4">
                        <ButtonPrimary>Télécharger mon CV</ButtonPrimary>
                        <ButtonSecondary>En savoir plus</ButtonSecondary>
                    </div>
                </div>
            </div>

            {/* Section statistiques */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mt-15 mx-auto px-8">
                {/* Projets réalisés */}
                <div className="bg-action rounded-xl p-10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-primary text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M12 2v7"></path>
                                <path d="m16 8-4 1-4-1"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-800 m-0 leading-tight">+30</p>
                            <p className="text-base text-gray-600 m-0 leading-tight">Projets réalisés</p>
                        </div>
                    </div>
                </div>

                {/* Ans d'expérience */}
                <div className="bg-action rounded-xl p-10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-primary text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-800 m-0 leading-tight">+2</p>
                            <p className="text-base text-gray-600 m-0 leading-tight">Ans d'expérience</p>
                        </div>
                    </div>
                </div>

                {/* Langages et outils */}
                <div className="bg-action rounded-xl p-10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-primary text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-800 m-0 leading-tight">+30</p>
                            <p className="text-base text-gray-600 m-0 leading-tight">Langages et outils maîtrisés</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section liens sociaux */}
            <div className="mt-10 flex justify-center">
                <div className="grid grid-cols-2 gap-5 max-w-md">
                    {/* GitHub */}
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 no-underline text-gray-800 py-4 px-5 rounded-lg bg-action transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5"
                    >
                        <div className="flex justify-center items-center w-9 h-9 rounded-lg bg-primary text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </div>
                        <span>GitHub</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 no-underline text-gray-800 py-4 px-5 rounded-lg bg-action transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5"
                    >
                        <div className="flex justify-center items-center w-9 h-9 rounded-lg bg-primary text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Presentation;