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
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
      <header className="mb-8 text-center">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 text-sm text-neutral-400 transition-colors hover:text-neutral-200"
        >
          ← Switch collection
        </button>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-neutral-400">{subtitle}</p>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCoverCard key={story.chapter} story={story} onClick={() => onSelect(story.chapter)} />
        ))}
      </div>
    </div>
  );
}
