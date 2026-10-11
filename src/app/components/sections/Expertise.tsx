import React from "react";
import fields from '@/app/data/fields.json';
import { Bot, Code2, Database, LucideIcon, Server, Smartphone, Workflow } from "lucide-react";

const Expertise: React.FC = () => {
    const { expertise } = fields;
    const icons: Record<string, LucideIcon> = {
        "Developpement frontend": Code2,
        "Developpement backend": Server,
        "Developpement d'applications": Smartphone,
        "Conception uml": Workflow,
        "Gestion de BDD": Database,
        "Gestion d'agents IA": Bot,
    };

    return (
        <section id="expertise" className="w-full bg-[#F7F9FF] py-16">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {expertise.title}
            </h2>

            {/* Grid des cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-8">
                {expertise.expertiseData.map((item, index) => (
                    <div key={index} className="rounded-lg bg-[#DDE2FE] p-10 text-center shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <div className="flex flex-col items-center">
                            {React.createElement(icons[item.title], {
                                className: "mt-4 mb-4 h-14 w-14 text-primary",
                                strokeWidth: 1.8,
                                "aria-hidden": true,
                            })}
                            <h3 className="text-lg mt-5 font-semibold text-primary">{item.title}</h3>
                        </div>
                        {/* <p className="text-gray-700">{item.description}</p> */} 
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Expertise;