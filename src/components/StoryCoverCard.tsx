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
      className={`group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br text-left shadow-lg ring-1 ring-white/10 transition-transform hover:scale-[1.02] ${accentGradient(story.accentColor)}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <span className="absolute top-3 left-3 z-10 text-xs font-bold uppercase tracking-wide text-white/70">
        Ch. {String(story.chapter).padStart(2, "0")}
      </span>
      <div className="relative z-10 p-4">
        <h2 className="text-sm font-bold uppercase tracking-wide text-white/70">
          {story.chapterTitle}
        </h2>
        <p className="mt-1 text-lg font-bold leading-snug text-white">{story.conceptName}</p>
      </div>
    </button>
  );
}
