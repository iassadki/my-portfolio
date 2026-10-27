import React from "react";
import { Building2, CalendarDays, Trophy } from "lucide-react";
import VideoEmbed from "../ui/VideoEmbed";
import fields from '@/app/data/fields.json';

const statIcons = [CalendarDays, Trophy, Building2];

const Presentation: React.FC = () => {
    const { presentation } = fields;

    return (
        <section id="presentation" className="px-4 pb-16 pt-8 sm:px-8 sm:pt-12">
            <h2 className="mb-12 text-center text-3xl font-bold text-black">
                {presentation.title}
            </h2>

            <div className="mx-auto max-w-7xl">
                {/* Vidéo en 16:9 pour éviter les bandes noires du lecteur YouTube */}
                <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-[22px] border-2 border-primary bg-action">
                    <VideoEmbed videoId={presentation.videoId} title={presentation.videoTitle} />
                </div>

                <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {presentation.stats.map((stat, index) => {
                        const Icon = statIcons[index];
                        return (
                            <div key={stat.label} className="flex min-h-[160px] items-center gap-6 rounded-[22px] bg-action px-8 py-7">
                                <Icon className="h-14 w-14 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                                <div>
                                    <p className="text-2xl font-bold leading-tight text-primary">{stat.value}</p>
                                    <p className="mt-2 text-lg leading-tight text-black">{stat.label}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Presentation;
