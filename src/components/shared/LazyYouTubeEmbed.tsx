"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import {
  getYouTubeThumbnailUrl,
  getYouTubeVideoId,
} from "@/lib/youtube";
import { cn } from "@/lib/utils";

type LazyYouTubeEmbedProps = {
  videoUrl: string;
  title: string;
  thumbnail?: string;
  className?: string;
};

function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div
      className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-charcoal/15"
      role="img"
      aria-label={title}
    >
      <span
        className="flex size-16 items-center justify-center rounded-full bg-white/90 text-charcoal/50 shadow-sm sm:size-20"
        aria-hidden
      >
        <Play className="ml-1 size-7 fill-current sm:size-8" />
      </span>
    </div>
  );
}

export function LazyYouTubeEmbed({
  videoUrl,
  title,
  thumbnail,
  className,
}: LazyYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeVideoId(videoUrl);

  // If no video ID but custom thumbnail is provided, show thumbnail with play button
  if (!videoId && thumbnail) {
    return (
      <div
        className={cn(
          "group relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal/15",
          className,
        )}
        role="img"
        aria-label={title}
      >
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span
          className="absolute inset-0 bg-charcoal/20 transition-colors group-hover:bg-charcoal/30"
          aria-hidden
        />
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-transform duration-300 group-hover:scale-105 sm:size-20">
            <Play className="ml-1 size-7 fill-current sm:size-8" />
          </span>
        </span>
      </div>
    );
  }

  if (!videoId) {
    return <VideoPlaceholder title={title} />;
  }

  if (!isPlaying) {
    return (
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className={cn(
          "group relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal/15",
          className,
        )}
        aria-label={`Play video: ${title}`}
      >
        <img
          src={thumbnail || getYouTubeThumbnailUrl(videoId)}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span
          className="absolute inset-0 bg-charcoal/20 transition-colors group-hover:bg-charcoal/30"
          aria-hidden
        />
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition-transform duration-300 group-hover:scale-105 sm:size-20">
            <Play className="ml-1 size-7 fill-current sm:size-8" />
          </span>
        </span>
      </button>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-2xl bg-charcoal",
        className,
      )}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
