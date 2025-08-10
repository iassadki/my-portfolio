import Image from "next/image";
import React from 'react';
import fields from '@/app/data/fields.json';
import ButtonPrimary from '@/app/components/ui/ButtonPrimary';
import ButtonSecondary from '@/app/components/ui/ButtonSecondary';

const Presentation: React.FC = () => {
    const { presentation } = fields;

    return (
        <section id="presentation" className="px-8 pt-0 pb-16">
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
                        unoptimized
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
                        <ButtonPrimary href="/resume/CV_Ilias_ASSADKI.pdf"
                            target="_blank">
                            Télécharger mon CV
                        </ButtonPrimary>
                        <ButtonSecondary href="#expertise">En savoir plus</ButtonSecondary>
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
                            <p className="text-base text-gray-600 m-0 leading-tight">Ans d&apos;expérience</p>
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
                {/* Réseaux sociaux */}
                <div className="bg-gray-50 rounded-lg p-8">
                    <div className="flex space-x-4">
                        {/* <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg> rel="noopener noreferrer" (voir ce que c'est) 
                                </a> */}
                        <a href="https://www.linkedin.com/in/ilias-assadki/" target="_blank" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://github.com/iassadki" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;