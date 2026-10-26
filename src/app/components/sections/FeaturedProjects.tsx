import React from "react";
import fields from '@/app/data/fields.json';
import ProjectCard from "@/app/components/ui/ProjectCard";
import ButtonSecondary from "@/app/components/ui/ButtonSecondary";

const FeaturedProjects: React.FC = () => {
    const { projects } = fields;
    const featured = projects.projectsData.filter(project => project.featured);

    return (
        <section id="projects" className="w-full scroll-mt-32 bg-white py-16">
            <h2 className="mb-12 text-center text-3xl font-bold text-black">
                {projects.featuredTitle}
            </h2>

            <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((item) => (
                        <ProjectCard key={item.title} project={item} />
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <ButtonSecondary href="/projects">
                        Voir tous les projets ({projects.projectsData.length})
                    </ButtonSecondary>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
