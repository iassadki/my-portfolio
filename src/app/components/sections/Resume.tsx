import React from "react";
import fields from '@/app/data/fields.json';
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

const Resume: React.FC = () => {
    const { resume } = fields;

    return (
        <section id="resume" className="w-full py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {resume.title}
            </h2>

            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="bg-action rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-primary mb-4">{resume.title}</h3>
                    <p className="text-gray-700">{resume.description}</p>
                    <p className="text-gray-700">Aperçu de mon CV</p>
                    <div className="mt-6">
                        <ButtonPrimary
                            href="/resume/CV_Ilias_ASSADKI.pdf"
                            target="_blank"
                            className="w-full block text-center"
                        >
                            Voir Aperçu
                        </ButtonPrimary>
                    </div>
                </div>
                {/* <div className="bg-action rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-primary mb-4">{resume.title}</h3>
                    <p className="text-gray-700">{resume.description}</p>
                    <div className="mt-6">
                        <ButtonPrimary href={resume.cvLink} className="w-full block text-center">
                            Télécharger le CV
                        </ButtonPrimary>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Resume;