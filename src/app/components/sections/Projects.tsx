"use client";

import React, { useState, useMemo } from "react";
import fields from '@/app/data/fields.json';
import ProjectCard from "@/app/components/ui/ProjectCard";

const Projects: React.FC = () => {
    const { projects } = fields;
    const [activeFilter, setActiveFilter] = useState<string>("Tout");

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
                    {filters.map((filter) => {
                        const count = filter === "Tout"
                            ? projects.projectsData.length
                            : projects.projectsData.filter(p => p.category === filter).length;

                        return (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                aria-pressed={activeFilter === filter}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                                    activeFilter === filter
                                        ? 'bg-primary text-white shadow-lg hover:shadow-xl'
                                        : 'bg-white text-gray-600 hover:bg-primary hover:text-white hover:shadow-lg shadow-md'
                                }`}
                            >
                                {filter}
                                <span className="ml-2 text-xs opacity-75">({count})</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Grid des projets */}
            <div className="max-w-7xl mx-auto px-8">
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((item) => (
                            <ProjectCard key={`${activeFilter}-${item.title}`} project={item} />
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
