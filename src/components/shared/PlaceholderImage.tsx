import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  seed: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  src?: string;
  /** Marks AI-generated stand-ins so they can be swapped for photography. */
  aiPlaceholder?: boolean;
};

export function PlaceholderImage({
  seed,
  alt,
  className,
  priority,
  fill = true,
  width,
  height,
  src: srcProp,
  aiPlaceholder,
}: PlaceholderImageProps) {
  const src = srcProp ?? `https://picsum.photos/seed/${seed}/1200/800`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        data-ai-placeholder={aiPlaceholder ? "true" : undefined}
        className={cn("object-cover", className)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 800}
      priority={priority}
      data-ai-placeholder={aiPlaceholder ? "true" : undefined}
      className={cn("object-cover", className)}
    />
  );
}
