import type { Story } from "../data/types";
import { accentGradient } from "../data/accentGradients";

interface StoryCoverCardProps {
  story: Story;
  onClick: () => void;
}

export function StoryCoverCard({ story, onClick }: StoryCoverCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br text-left shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-out hover:scale-[1.035] hover:shadow-2xl hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${accentGradient(story.accentColor)}`}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/0" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />

      {/* Ghost chapter number */}
      <span
        className="pointer-events-none absolute -right-1 -top-2 font-serif text-[5.5rem] font-bold leading-none text-white/[0.08] select-none"
        aria-hidden="true"
      >
        {String(story.chapter).padStart(2, "0")}
      </span>

      {/* Chapter badge */}
      <div className="relative z-10 p-4">
        <span className="inline-block rounded-md bg-black/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/65 ring-1 ring-white/10 backdrop-blur-sm">
          Ch. {String(story.chapter).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 p-4">
        <p className="text-[9px] font-semibold uppercase tracking-widest text-white/45">
          {story.chapterTitle}
        </p>
        <h2 className="mt-1 font-serif text-base font-bold leading-snug text-white sm:text-[1.05rem]">
          {story.conceptName}
        </h2>
        <div className="mt-2.5 flex justify-end">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-3.5 w-3.5 text-white/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/70"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
