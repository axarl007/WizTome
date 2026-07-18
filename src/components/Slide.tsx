import type { Slide as SlideData } from "../data/types";
import { accentGradient } from "../data/accentGradients";

interface SlideProps {
  slide: SlideData;
  index: number;
  total: number;
  accentColor: string;
}

export function Slide({ slide, index, total, accentColor }: SlideProps) {
  const isLesson = slide.heading === "The Lesson";

  return (
    <div
      className={`relative flex h-full w-full shrink-0 flex-col justify-end overflow-hidden bg-gradient-to-br ${accentGradient(accentColor)}`}
    >
      {/* Base overlay */}
      <div
        className={`absolute inset-0 ${
          isLesson
            ? "bg-gradient-to-t from-black/80 via-black/40 to-black/20"
            : "bg-gradient-to-t from-black/68 via-black/15 to-transparent"
        }`}
      />

      {/* Lesson slide: decorative large character */}
      {isLesson && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-serif text-[11rem] font-bold leading-none text-white/[0.045] select-none">
            悟
          </span>
        </div>
      )}

      <div className="relative z-10 p-6 pb-20">
        {isLesson ? (
          <>
            {/* Lesson badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300 ring-1 ring-amber-400/25">
              ✦ The Lesson
            </span>

            {/* Lesson body as featured quote */}
            <blockquote className="mt-5 font-serif text-xl font-bold italic leading-snug text-amber-100 sm:text-2xl">
              "{slide.body}"
            </blockquote>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-widest text-white/30">
              {index + 1} of {total}
            </p>
          </>
        ) : (
          <>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/45">
              {index + 1} / {total}
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold leading-snug text-white sm:text-3xl">
              {slide.heading}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80">
              {slide.body}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
