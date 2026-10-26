import React from "react";
import fields from '@/app/data/fields.json';
import { Bot, Layers, LucideIcon, Server } from "lucide-react";

const icons: Record<string, LucideIcon> = {
    server: Server,
    bot: Bot,
    layers: Layers,
};

const Expertise: React.FC = () => {
    const { expertise } = fields;

    return (
        <section id="expertise" className="w-full scroll-mt-32 bg-[#F7F9FF] py-16">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {expertise.title}
            </h2>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-8 lg:grid-cols-3">
                {expertise.expertiseData.map((item) => {
                    const Icon = icons[item.icon];
                    return (
                        <article
                            key={item.title}
                            className="flex flex-col rounded-[22px] bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-action text-primary">
                                <Icon className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-black">{item.title}</h3>
                            <p className="mt-3 flex-1 leading-relaxed text-gray-600">{item.description}</p>
                            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                                {item.tags.map((tag) => (
                                    <li key={tag} className="rounded-full bg-action px-3 py-1 text-xs font-semibold text-primary">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Expertise;
