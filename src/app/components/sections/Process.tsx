import React from "react";
import fields from '@/app/data/fields.json';
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

const Process: React.FC = () => {
    const { process } = fields;

    return (
        <section id="process" className="w-full scroll-mt-32 bg-white py-16">
            <h2 className="mb-12 text-center text-3xl font-bold text-black">
                {process.title}
            </h2>

            <ol className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-8 sm:grid-cols-2 lg:grid-cols-4">
                {process.steps.map((step, index) => (
                    <li key={step.title} className="rounded-[22px] bg-action p-6">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white" aria-hidden="true">
                            {index + 1}
                        </span>
                        <h3 className="mt-5 text-lg font-semibold text-black">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">{step.description}</p>
                    </li>
                ))}
            </ol>

            <div className="mt-10 flex justify-center">
                <ButtonPrimary href="#contact">Planifier un appel découverte</ButtonPrimary>
            </div>
        </section>
    );
};

export default Process;
