import { BriefcaseBusiness, FileDown, Linkedin, MapPin } from "lucide-react";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import fields from '@/app/data/fields.json';

const Hero: React.FC = () => {
    const { hero, resume, contact } = fields;

    return (
        <section id="hero" className="relative w-full">
            <div
                className="relative flex min-h-[712px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-16 pt-56 text-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(248, 247, 255, 0.88) 0%, rgba(203, 193, 255, 0.42) 58%, rgba(255, 255, 255, 0.9) 100%), url(${hero.imagePath})`,
                }}
            >
                {/* Disponibilité */}
                <a
                    href="#contact"
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-300 bg-white/80 px-4 py-1.5 text-sm font-semibold text-green-800 shadow-sm transition-colors hover:bg-white"
                >
                    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                    </span>
                    {hero.availability}
                </a>

                <p className="font-jakarta text-lg font-semibold text-black/70 sm:text-xl">
                    {hero.name}
                </p>

                <h1 className="mt-2 max-w-4xl font-jakarta text-4xl font-bold leading-[1.1] text-black sm:text-[56px]">
                    {hero.title}{" "}
                    <span className="text-primary underline decoration-4 underline-offset-8">{hero.title_primary}</span>
                    <br className="hidden sm:block" />{" "}
                    {hero.title_suffix}
                </h1>

                <p className="mt-8 max-w-2xl font-jakarta text-base font-medium text-black/80 sm:text-xl">
                    {hero.description}
                </p>

                <ul className="mt-6 flex max-w-2xl flex-wrap justify-center gap-2" aria-label="Technologies principales">
                    {hero.stack.map((tech) => (
                        <li
                            key={tech}
                            className="rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-sm font-semibold text-primary"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                    <ButtonPrimary href="#contact">Me contacter</ButtonPrimary>
                    <ButtonSecondary href="#projects">Voir mes projets</ButtonSecondary>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
                    <a href={resume.cvLink} download className="inline-flex items-center gap-1.5 text-primary hover:underline">
                        <FileDown className="h-4 w-4" aria-hidden="true" />
                        Télécharger mon CV
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                        LinkedIn
                    </a>
                    {contact.malt && (
                        <a href={contact.malt} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                            <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                            Malt
                        </a>
                    )}
                    <span className="inline-flex items-center gap-1.5 font-normal text-black/60">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {hero.location}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
