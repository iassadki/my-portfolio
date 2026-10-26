import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

interface Skill {
    title: string;
    imagePath: string;
}

interface SkillCategory {
    category: string;
    featured?: boolean;
    skills: Skill[];
}

const Skills: React.FC = () => {
    const { skills } = fields;
    const categories: SkillCategory[] = skills.skillsCategories;
    const [core, ...others] = categories;

    return (
        <section id="skills" className="w-full scroll-mt-32 bg-white py-16">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {skills.title}
            </h2>

            <div className="mx-auto max-w-6xl space-y-8 px-8">
                {/* Cœur de métier, mis en avant */}
                <div className="rounded-3xl border-2 border-primary bg-action p-8">
                    <h3 className="mb-6 text-2xl font-semibold text-primary">
                        {core.category}
                    </h3>
                    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {core.skills.map((skill) => (
                            <li
                                key={skill.title}
                                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm"
                            >
                                <Image
                                    src={skill.imagePath}
                                    alt=""
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 object-contain"
                                    unoptimized
                                />
                                <span className="text-lg font-semibold text-black">{skill.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {others.map((category) => (
                        <div key={category.category} className="rounded-3xl bg-[#F7F9FF] p-8">
                            <h3 className="mb-6 text-xl font-semibold text-primary">
                                {category.category}
                            </h3>
                            <ul className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill.title}
                                        className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm"
                                    >
                                        <Image
                                            src={skill.imagePath}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="h-6 w-6 object-contain"
                                            unoptimized
                                        />
                                        <span className="text-sm font-medium text-gray-800">{skill.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
