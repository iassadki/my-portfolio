import React from "react";
import fields from '@/app/data/fields.json';
import Image from "next/image";

const Contact: React.FC = () => {
    const { contact } = fields;

    return (
        <section className="w-full py-16 bg-white">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                {contact.title}
            </h2>
        </section>
    );
};

export default Contact;