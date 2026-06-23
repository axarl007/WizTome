import type { Slide as SlideData } from "../data/types";
import { accentGradient } from "../data/accentGradients";

interface SlideProps {
  slide: SlideData;
  index: number;
  total: number;
  accentColor: string;
}

export function Slide({ slide, index, total, accentColor }: SlideProps) {
  return (
    <div
      className={`relative flex h-full w-full shrink-0 flex-col justify-end overflow-hidden bg-gradient-to-br ${accentGradient(accentColor)}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      <div className="relative z-10 p-6 pb-20 text-white">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
          {index + 1} / {total}
        </span>
        <h3 className="mt-2 text-2xl font-bold leading-snug">{slide.heading}</h3>
        <p className="mt-3 text-base leading-relaxed text-white/90">{slide.body}</p>
      </div>
    </div>
  );
}
