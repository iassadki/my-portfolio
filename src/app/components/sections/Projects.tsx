import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

const Projects: React.FC = () => {
    const { projects } = fields;

    return (
        <section id="projects" className="w-full py-16 bg-gray-50">
            {/* Titre de la section */}
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {projects.title}
            </h2>

            {/* Grid des projets */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.projectsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image du projet */}
                            <div className="relative w-100 h-50 bg-gray-200">
                                <Image
                                    src={item.imagePath}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Icône en haut à droite */}
                                <div className="absolute top-4 left-83 w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>

                            {/* Contenu de la card */}
                            <div className="p-6">
                                {/* Catégorie */}
                                <span className="text-sm font-bold text-primary mb-2 block">
                                    {item.category}
                                </span>

                                {/* Titre */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                {/* Bouton */}
                                <div className="w-full">
                                    <ButtonPrimary href={item.link} className="w-full block text-center">
                                        Voir le projet
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;