'use client';

import React, { useState } from "react";
import { Clock, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import fields from '@/app/data/fields.json';
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    website: string;
}

const emptyForm: FormData = { name: '', email: '', subject: '', message: '', website: '' };

const inputClasses = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black transition-colors placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary";

const Contact: React.FC = () => {
    const { contact } = fields;
    const [formData, setFormData] = useState<FormData>(emptyForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            setSubmitStatus('success');
            setFormData(emptyForm);
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

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
                                        <div>
                                            <p className="font-medium text-black">{label}</p>
                                            {href ? (
                                                <a href={href} className="text-gray-700 hover:text-primary hover:underline">{value}</a>
                                            ) : (
                                                <p className="text-gray-700">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-4 border-t border-primary/15 pt-6">
                                <a
                                    href="https://www.linkedin.com/in/ilias-assadki/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition-transform hover:scale-105"
                                >
                                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                                </a>
                                <a
                                    href="https://github.com/iassadki"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition-transform hover:scale-105"
                                >
                                    <Github className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="rounded-[22px] bg-[#F7F9FF] p-8">
                        <h3 className="mb-6 text-xl font-semibold text-black">
                            Envoyez-moi un message
                        </h3>

                        {submitStatus === 'success' && (
                            <div role="status" className="mb-6 rounded-lg border border-green-400 bg-green-100 p-4 text-green-700">
                                {contact.form.successMessage}
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div role="alert" className="mb-6 rounded-lg border border-red-400 bg-red-100 p-4 text-red-700">
                                {contact.form.errorMessage}{" "}
                                Vous pouvez aussi m&apos;écrire directement à{" "}
                                <a href={`mailto:${contact.email}`} className="font-semibold underline">{contact.email}</a>.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                        {contact.form.name} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={100}
                                        autoComplete="name"
                                        className={inputClasses}
                                        placeholder={contact.form.namePlaceholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                        {contact.form.email} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={200}
                                        autoComplete="email"
                                        className={inputClasses}
                                        placeholder={contact.form.emailPlaceholder}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                                    {contact.form.subject}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    maxLength={200}
                                    className={inputClasses}
                                    placeholder={contact.form.subjectPlaceholder}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                    {contact.form.message} *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    maxLength={5000}
                                    className={`${inputClasses} resize-y`}
                                    placeholder={contact.form.messagePlaceholder}
                                />
                            </div>

                            {/* Champ piège anti-spam, invisible pour les humains */}
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="website">Site web</label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <ButtonPrimary
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className="flex w-full items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                                        <span>Envoi en cours...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5" aria-hidden="true" />
                                        <span>{contact.form.submit}</span>
                                    </>
                                )}
                            </ButtonPrimary>
                        </form>

                        <p className="mt-4 text-center text-sm text-gray-500">
                            * Champs obligatoires
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
