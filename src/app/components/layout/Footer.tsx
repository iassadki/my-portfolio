import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-white">IA</span>
                            <span className="ml-2 text-lg">Ilias Assadki</span>
                        </div>
                        <p className="text-gray-100 mb-4 max-w-md">
                            Développeur NextJS/NodeJS passionné par la création d`&apos`applications web modernes et performantes.
                        </p>
                        <div className="flex space-x-4">
                            {/* Réseaux sociaux */}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-white transition-colors"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-white transition-colors"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="text-gray-200 hover:text-white transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation rapide */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-gray-100 hover:text-white transition-colors">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-gray-100 hover:text-white transition-colors">
                                    Projets
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-100 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/cv" className="text-gray-100 hover:text-white transition-colors">
                                    CV
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <span className="text-gray-100">Développement Web</span>
                            </li>
                            <li>
                                <span className="text-gray-100">UI/UX Design</span>
                            </li>
                            <li>
                                <span className="text-gray-100">Applications Mobile</span>
                            </li>
                            <li>
                                <span className="text-gray-100">Consulting</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Ligne de séparation et copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-100 text-sm">
                            © {currentYear} Ilias Assadki. Tous droits réservés.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <Link href="/privacy" className="text-gray-100 hover:text-white text-sm transition-colors">
                                Politique de confidentialité
                            </Link>
                            <Link href="/terms" className="text-gray-100 hover:text-white text-sm transition-colors">
                                Conditions d`&apos`utilisation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;