import React from "react";
import { Building2, CalendarCheck, LucideIcon, ShieldCheck } from "lucide-react";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import fields from '@/app/data/fields.json';

const highlightIcons: Record<string, LucideIcon> = {
    building: Building2,
    calendar: CalendarCheck,
    shield: ShieldCheck,
};

const Hero: React.FC = () => {
    const { hero } = fields;

    return (
        <section id="hero" className="relative w-full font-sans">
            <div
                className="relative flex min-h-[760px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 pb-20 pt-40 text-center sm:pt-44"
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

                {/* Titre large et serré, lignes équilibrées */}
                <h1 className="max-w-6xl text-balance text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-[44px] lg:text-[52px] lg:leading-[1.08] xl:text-[56px]">
                    {hero.title}{" "}
                    <span className="text-primary">{hero.title_primary}</span>{" "}
                    {hero.title_suffix}
                </h1>

                {/* Sous-titre en gris, deux phrases courtes */}
                <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed tracking-tight text-[#525252] sm:text-xl">
                    {hero.subtitle}
                    {/* <br className="hidden sm:block" />{" "} */}
                    {/* {hero.tagline} <span className="text-primary">{hero.tagline_primary}</span> */}
                </p>

                {/* Arguments, en pastilles discrètes */}
                <ul className="mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
                    {hero.highlights.map(({ icon, label }) => {
                        const Icon = highlightIcons[icon];
                        return (
                            <li
                                key={label}
                                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#474747] shadow-sm"
                            >
                                <Icon className="h-4 w-4 text-primary" strokeWidth={2.2} aria-hidden="true" />
                                {label}
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                    <ButtonPrimary href="#projects" className="!px-8 !py-3.5 !text-base">Voir mes projets</ButtonPrimary>
                    <ButtonSecondary href="#contact" className="!px-8 !py-3.5 !text-base">Me contacter</ButtonSecondary>
                </div>

                {/* Stack */}
                <p className="mt-14 text-sm font-medium text-[#6b6b6b]">{hero.stackLabel}</p>
                <ul className="mt-4 flex max-w-2xl flex-wrap justify-center gap-2" aria-label={hero.stackLabel}>
                    {hero.stack.map((tech) => (
                        <li
                            key={tech}
                            className="rounded-full border border-primary/25 bg-primary/15 px-3.5 py-1.5 text-sm font-semibold text-[#1c00a8]"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
