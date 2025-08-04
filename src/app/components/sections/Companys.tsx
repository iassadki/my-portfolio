import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";
// import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

const Companys: React.FC = () => {
    const { companys } = fields;

    return (
        <section id="experiences" className="w-full py-16 bg-white">
            {/* Titre de la section */}
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {companys.title}
            </h2>

            {/* Liste des entreprises, grille de 5 */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {companys.companysData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-3 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image de l'entreprise */}
                            <div className="relative w-full h-48 bg-white-200">
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