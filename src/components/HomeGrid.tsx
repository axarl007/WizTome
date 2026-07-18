import type { Story } from "../data/types";
import { StoryCoverCard } from "./StoryCoverCard";

interface HomeGridProps {
  stories: Story[];
  onSelect: (chapter: number) => void;
  title: string;
  subtitle: string;
  onBack: () => void;
}

export function HomeGrid({ stories, onSelect, title, subtitle, onBack }: HomeGridProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <header className="mb-8 animate-fade-up">
        <button
          type="button"
          onClick={onBack}
          className="group mb-6 flex items-center gap-1.5 text-sm text-neutral-500 transition-all duration-200 hover:text-neutral-200 focus-visible:outline-none focus-visible:text-neutral-200"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
            aria-hidden="true"
          >
            <path
              d="M19 12H5M11 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Switch collection
        </button>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">{subtitle}</p>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/[0.07]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
            {stories.length} chapters
          </span>
          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {stories.map((story, i) => (
          <div
            key={story.chapter}
            className="animate-fade-up"
            style={{ animationDelay: `${Math.min(i * 30, 300)}ms` }}
          >
            <StoryCoverCard story={story} onClick={() => onSelect(story.chapter)} />
          </div>
        ))}
      </div>
    </div>
  );
}
