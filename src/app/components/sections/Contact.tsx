import React from "react";
import { BriefcaseBusiness, CalendarDays, Clock, FileDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import fields from '@/app/data/fields.json';

const Contact: React.FC = () => {
    const { contact, resume } = fields;

    const infos = [
        { icon: Mail, label: contact.placeHolderEmail, value: contact.email, href: `mailto:${contact.email}` },
        { icon: Phone, label: contact.placeHolderPhone, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
        { icon: MapPin, label: contact.placeHolderLocation, value: contact.location },
        { icon: Clock, label: contact.placeHolderAvailablity, value: contact.availablity },
    ];

    return (
        <section id="contact" className="w-full scroll-mt-32 bg-white py-16">
            <div className="mx-auto max-w-6xl px-8">
                <h2 className="mb-4 text-center text-3xl font-bold text-black">
                    {contact.title}
                </h2>
                <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
                    {contact.description}
                </p>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Informations de contact */}
                    <div className="space-y-8">
                        <div className="rounded-[22px] bg-action p-8">
                            <h3 className="mb-6 text-xl font-semibold text-black">
                                {contact.placeHolder}
                            </h3>

                            <div className="space-y-6">
                                {infos.map(({ icon: Icon, label, value, href }) => (
                                    <div key={label} className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
                                            <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-medium text-black">{label}</p>
                                            {href ? (
                                                <a href={href} className="break-all text-gray-700 hover:text-primary hover:underline">{value}</a>
                                            ) : (
                                                <p className="text-gray-700">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3 border-t border-primary/15 pt-6">
                                <a
                                    href={contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-bold transition-transform hover:scale-105 bg-primary text-white"
                                >
                                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                                    LinkedIn
                                </a>
                                {contact.malt && (
                                    <a
                                        href={contact.malt}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-bold transition-transform hover:scale-105 bg-primary text-white"
                                    >
                                        <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                                        Malt
                                    </a>
                                )}
                                <a
                                    href={contact.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-bold transition-transform hover:scale-105 bg-white text-primary"
                                >
                                    <Github className="h-4 w-4" aria-hidden="true" />
                                    GitHub
                                </a>
                                <a
                                    href={resume.cvLink}
                                    download
                                    className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-bold transition-transform hover:scale-105 bg-white text-primary"
                                >
                                    <FileDown className="h-4 w-4" aria-hidden="true" />
                                    CV (PDF)
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Prise de rendez-vous Calendly */}
                    <div className="flex flex-col overflow-hidden rounded-[22px] border-2 border-primary/20 bg-white">
                        <div className="flex items-center gap-3 px-8 pt-8">
                            <CalendarDays className="h-6 w-6 text-primary" strokeWidth={1.8} aria-hidden="true" />
                            <h3 className="text-xl font-semibold text-black">{contact.calendlyTitle}</h3>
                        </div>
                        <iframe
                            src={`${contact.calendly}?hide_gdpr_banner=1&primary_color=2a00ff`}
                            title={contact.calendlyTitle}
                            loading="lazy"
                            className="min-h-[700px] w-full flex-1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
