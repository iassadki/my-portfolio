'use client';

import React, { useState } from "react";
import fields from '@/app/data/fields.json';
// import Image from "next/image";
import ButtonPrimary from "@/app/components/ui/ButtonPrimary";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const { contact } = fields;
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simuler l'envoi du formulaire
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Ici vous pourriez ajouter votre logique d'envoi d'email
            // Par exemple avec EmailJS, Nodemailer, ou une API

            console.log('Données du formulaire:', formData);

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

    return (
        <section id="contact" className="w-full py-16 bg-white">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-center text-black mb-4">
                    {contact.title}
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    {contact.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Section informations de contact */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-lg p-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">
                                {contact.placeHolder}
                            </h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{contact.placeHolderEmail}</p>
                                        <p className="text-gray-600">{contact.email}</p>
                                    </div>
                                </div>

                                {/* Téléphone */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{contact.placeHolderPhone}</p>
                                        <p className="text-gray-600">{contact.phone}</p>
                                    </div>
                                </div>

                                {/* Localisation */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{contact.placeHolderLocation}</p>
                                        <p className="text-gray-600">{contact.location}</p>
                                    </div>
                                </div>

                                {/* Disponibilité */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{contact.placeHolderAvailablity}</p>
                                        <p className="text-gray-600">{contact.availablity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="bg-gray-50 rounded-lg p-8">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Suivez-moi</h4>
                            <div className="flex space-x-4">
                                {/* <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a> */}
                                <a href="https://www.linkedin.com/in/ilias-assadki/" target="_blank" className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/iassadki" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                            Envoyez-moi un message
                        </h3>

                        {/* Messages de statut */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                {contact.form.successMessage}
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                {contact.form.errorMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nom */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    {contact.form.name} *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400 text-gray-900"
                                    placeholder="Votre nom complet"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    {contact.form.email} *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder:text-gray-400 text-gray-900"
                                    placeholder="votre.email@exemple.com"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    {contact.form.message} *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical placeholder:text-gray-400 text-gray-900"
                                    placeholder="Décrivez votre projet ou votre demande..."
                                />
                            </div>

                            {/* Bouton d'envoi */}
                            <ButtonPrimary
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className="w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Envoi en cours...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        <span>{contact.form.submit}</span>
                                    </>
                                )}
                            </ButtonPrimary>
                        </form>

                        <p className="mt-4 text-sm text-gray-500 text-center">
                            * Champs obligatoires
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;