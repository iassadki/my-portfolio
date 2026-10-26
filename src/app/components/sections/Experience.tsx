import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";

const Experience: React.FC = () => {
    const { experiences } = fields;

    return (
        <section id="experiences" className="w-full scroll-mt-32 bg-[#F7F9FF] py-16">
            <h2 className="mb-12 text-center text-3xl font-bold text-black">
                {experiences.title}
            </h2>

            {/* Timeline */}
            <ol className="relative mx-auto max-w-4xl space-y-8 px-8">
                {experiences.experiencesData.map((item) => (
                    <li key={`${item.company}-${item.period}`} className="relative sm:pl-12">
                        {/* Point et ligne de la timeline */}
                        <span className="absolute left-0 top-8 hidden h-full w-px bg-primary/20 sm:left-[11px] sm:block" aria-hidden="true" />
                        <span className="absolute left-0 top-7 hidden h-6 w-6 rounded-full border-4 border-[#F7F9FF] bg-primary sm:block" aria-hidden="true" />

                        <article className="rounded-[22px] bg-white p-6 shadow-md sm:p-8">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-action">
                                        {item.logo ? (
                                            <Image
                                                src={item.logo}
                                                alt={item.company}
                                                width={56}
                                                height={56}
                                                className="h-full w-full object-contain p-1.5"
                                                unoptimized
                                            />
                                        ) : (
                                            <span className="text-lg font-bold text-primary" aria-hidden="true">
                                                {item.company.slice(0, 2).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-black">{item.role}</h3>
                                        <p className="mt-1 font-semibold text-primary">
                                            {item.link ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                                                    {item.company}
                                                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                                                </a>
                                            ) : (
                                                item.company
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 sm:flex-col sm:items-end">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CalendarDays className="h-4 w-4" aria-hidden="true" />
                                        {item.period}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" aria-hidden="true" />
                                        {item.location}
                                    </span>
                                </div>
                            </div>

                            <ul className="mt-6 space-y-2 text-gray-700">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-3">
                                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                                {item.stack.map((tech) => (
                                    <li key={tech} className="rounded-full bg-action px-3 py-1 text-xs font-semibold text-primary">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </li>
                ))}
            </ol>

            {/* Autres références */}
            <div className="mx-auto mt-16 max-w-5xl px-8">
                <h3 className="mb-8 text-center text-lg font-semibold text-black/70">
                    {experiences.othersTitle}
                </h3>
                <ul className="flex flex-wrap items-center justify-center gap-10">
                    {experiences.others.map((item) => (
                        <li key={item.name} className="relative h-20 w-36">
                            <Image
                                src={item.imagePath}
                                alt={item.name}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
