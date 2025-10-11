
import React from "react";

type MapEmbedProps = {
  src: string;
  title?: string;
  aspectPercent?: number;
  className?: string;
  withBorder?: boolean;
  rounded?: boolean;
};

export default function MapEmbed({
  src,
  title = "Google Map",
  aspectPercent = 56.25, 
  className = "",
  withBorder = true,
  rounded = true,
}: MapEmbedProps) {
  return (
    <div
      className={[
        "relative w-full h-0",
        rounded ? "overflow-hidden rounded-2xl" : "",
        withBorder ? "ring-1 ring-black/10 dark:ring-white/10" : "",
        className,
      ].join(" ")}
      style={{ paddingBottom: `${aspectPercent}%` }}
    >
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
