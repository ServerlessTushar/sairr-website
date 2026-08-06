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
};

export function PlaceholderImage({
  seed,
  alt,
  className,
  priority,
  fill = true,
  width,
  height,
}: PlaceholderImageProps) {
  const src = `https://picsum.photos/seed/${seed}/1200/800`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
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
      className={cn("object-cover", className)}
    />
  );
}
