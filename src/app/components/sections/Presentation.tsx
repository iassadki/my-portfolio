import React from "react";
import { CalendarDays, Cog, Play, Trophy } from "lucide-react";

const Presentation: React.FC = () => {
    return (
        <section id="presentation" className="px-4 pb-16 pt-8 sm:px-8 sm:pt-12">
            <h2 className="mb-12 text-center text-3xl font-bold text-black">
                Présentation
            </h2>

            <div className="mx-auto max-w-7xl">
                <div
                    className="flex aspect-[2.35/1] min-h-[280px] items-center justify-center rounded-[22px] border-2 border-primary bg-action"
                    aria-label="Présentation vidéo"
                >
                    <button
                        type="button"
                        aria-label="Lire la vidéo de présentation"
                        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-primary transition-transform hover:scale-105"
                    >
                        <Play className="ml-1 h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                    </button>
                </div>

                <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div className="flex min-h-[160px] items-center gap-6 rounded-[22px] bg-action px-8 py-7">
                        <Trophy className="h-14 w-14 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                        <div>
                            <p className="text-2xl font-bold leading-tight text-primary">+30</p>
                            <p className="mt-2 text-lg leading-tight text-black">Projets réalisés</p>
                        </div>
                    </div>

                    <div className="flex min-h-[160px] items-center gap-6 rounded-[22px] bg-action px-8 py-7">
                        <CalendarDays className="h-14 w-14 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                        <div>
                            <p className="text-2xl font-bold leading-tight text-primary">+4</p>
                            <p className="mt-2 text-lg leading-tight text-black">Ans d’expérience</p>
                        </div>
                    </div>

                    <div className="flex min-h-[160px] items-center gap-6 rounded-[22px] bg-action px-8 py-7">
                        <Cog className="h-14 w-14 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                        <div>
                            <p className="text-2xl font-bold leading-tight text-primary">+30</p>
                            <p className="mt-2 text-lg leading-tight text-black">Langages et outils maîtrisés</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
