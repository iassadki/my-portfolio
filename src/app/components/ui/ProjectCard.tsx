import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
    title: string;
    category: string;
    imagePath: string;
    description: string;
    stack: string[];
    github: string;
    demo: string;
    featured: boolean;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const mainLink = project.demo || project.github;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fadeIn">
            <a
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-gray-200 bg-gray-200"
                aria-label={`Ouvrir ${project.title}`}
            >
                <Image
                    src={project.imagePath}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                />
            </a>

            <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 block text-sm font-bold text-primary">
                    {project.category}
                </span>

                <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                </h3>

                {project.description && (
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {project.description}
                    </p>
                )}

                {project.stack.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                        {project.stack.map((tech) => (
                            <li key={tech} className="rounded-full bg-action px-3 py-1 text-xs font-semibold text-primary">
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-auto flex gap-3 pt-6">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary bg-primary px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
                        >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Voir le site
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-sm font-bold transition-transform hover:scale-105 ${
                            project.demo ? "bg-action text-primary" : "bg-primary text-white"
                        }`}
                    >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        Code source
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
