"use client";

import React, { useState, useMemo } from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

const Projects: React.FC = () => {
    const { projects } = fields;
    const [activeFilter, setActiveFilter] = useState<string>("Application web");

    const filters = ["Tout", "Application web", "Application mobile"];

    const filteredProjects = useMemo(() => {
        if (activeFilter === "Tout") {
            return projects.projectsData;
        }
        return projects.projectsData.filter(project => project.category === activeFilter);
    }, [projects.projectsData, activeFilter]);

    return (
        <section id="projects" className="w-full py-16 bg-gray-50">
            {/* Titre de la section */}
            <h2 className="text-3xl font-bold text-center text-black mb-8">
                {projects.title}
            </h2>

            {/* Filtres */}
            <div className="max-w-4xl mx-auto px-8 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer hover:cursor-pointer ${
                                activeFilter === filter
                                    ? 'bg-primary text-white shadow-lg hover:bg-primary-600 hover:shadow-xl'
                                    : 'bg-white text-gray-600 hover:bg-primary hover:text-white hover:shadow-lg shadow-md'
                            }`}
                        >
                            {filter}
                            {filter !== "Tout" && (
                                <span className="ml-2 text-xs opacity-75">
                                    ({projects.projectsData.filter(p => p.category === filter).length})
                                </span>
                            )}
                            {filter === "Tout" && (
                                <span className="ml-2 text-xs opacity-75">
                                    ({projects.projectsData.length})
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid des projets */}
            <div className="max-w-7xl mx-auto px-8">
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((item, index) => (
                            <div
                                key={`${activeFilter}-${index}`}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeIn"
                            >
                            {/* Image du projet */}
                            <a href={item.link} target="_blank" className="hover:bg-green-700">

                                <div className="relative w-100 h-50 bg-gray-200">
                                    <Image
                                        src={item.imagePath}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    {/* Icône en haut à droite */}
                                    <div className="absolute top-4 left-83 w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <hr className="border-t border-gray-200 my-0" />
                                </div>
                            </a>

                            {/* Contenu de la card */}
                            <div className="p-6">
                                {/* Catégorie */}
                                <span className="text-sm font-bold text-primary mb-2 block">
                                    {item.category}
                                </span>

                                {/* Titre */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                {/* <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {item.description}
                                </p> */}

                                {/* Bouton */}
                                <div className="w-full">
                                    <ButtonPrimary href={item.link} target="_blank" className="w-full block text-center">
                                        Voir le projet
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">
                            Aucun projet trouvé pour cette catégorie.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;