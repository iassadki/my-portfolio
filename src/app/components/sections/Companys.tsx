import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";
// import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

const Companys: React.FC = () => {
    const { companys } = fields;

    return (
        <section id="experiences" className="w-full bg-[#FFFFF] py-16">
            {/* Titre de la section */}
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {companys.title}
            </h2>

            {/* Liste des entreprises, grille de 5 */}
            <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {companys.companysData.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-[24px] bg-[#F7F9FF] p-6 transition-shadow duration-300 hover:shadow-lg"
                        >
                            {/* Image de l'entreprise */}
                            <div className="relative flex h-40 w-full items-center justify-center rounded-xl">
                                
                                <Image
                                    src={item.imagePath}
                                    alt={item.name}
                                    width={200}
                                    height={120}
                                    className="object-contain w-full h-full"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Companys;