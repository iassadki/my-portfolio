import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

const Skills: React.FC = () => {
    const { skills } = fields;

    return (
        <section id="skills" className="w-full py-16 bg-white">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {skills.title}
            </h2>

            <div className="max-w-6xl mx-auto px-8 space-y-8">
                {skills.skillsCategories.map((category, categoryIndex) => (
                    <div
                        key={categoryIndex}
                        className="bg-action rounded-3xl p-8"
                    >
                        {/* Titre de la catégorie */}
                        <h3 className="text-2xl font-semibold text-primary mb-6">
                            {category.category}
                        </h3>

                        {/* Grid des icônes */}
                        <div className="flex flex-wrap gap-6">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <Image
                                        src={skill.imagePath}
                                        alt={skill.title}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;