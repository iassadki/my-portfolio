import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

const Expertise: React.FC = () => {
    const { expertise } = fields;

    return (
        <section id="expertise" className="w-full py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {expertise.title}
            </h2>

            {/* Grid des cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-8">
                {expertise.expertiseData.map((item, index) => (
                    <div key={index} className="bg-action rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src={item.imagePath}
                                alt={item.title}
                                width={50}
                                height={50}
                                className="w-14 h-14 mt-4 mb-4"
                            />
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