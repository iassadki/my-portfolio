"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
    videoId: string;
    title: string;
}

// Miniature + bouton play : le lecteur YouTube n'est chargé qu'au clic (page plus légère, pas de cookies avant lecture)
const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying) {
        return (
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
            />
        );
    }

    return (
        <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Lire la vidéo : ${title}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-primary/5" aria-hidden="true" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                <Play className="ml-1 h-8 w-8 fill-white sm:h-9 sm:w-9" strokeWidth={1.5} aria-hidden="true" />
            </span>
        </button>
    );
};

export default VideoEmbed;
