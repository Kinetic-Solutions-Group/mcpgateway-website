import Image from "next/image";

interface ProductScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function ProductScreenshot({
  src,
  alt,
  caption,
  priority = false,
}: ProductScreenshotProps): React.ReactNode {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-[60px]" />
      <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          className="w-full"
          priority={priority}
        />
      </div>
      {caption ? (
        <p className="mt-4 text-center text-sm text-muted-foreground/50">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
