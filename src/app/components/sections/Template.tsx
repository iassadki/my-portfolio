import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

const Template: React.FC = () => {
    const { template } = fields;

    return (
        <section className="w-full py-16 bg-white">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {template.title}
            </h2>
        </section>
    );
};

export default Template;