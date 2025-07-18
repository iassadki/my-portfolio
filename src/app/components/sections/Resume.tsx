import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

const Resume: React.FC = () => {
    const { resume } = fields;

    return (
        <section className="w-full py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {resume.title}
            </h2>
        </section>
    );
};

export default Resume;