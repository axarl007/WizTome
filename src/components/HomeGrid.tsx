import type { Story } from "../data/types";
import { StoryCoverCard } from "./StoryCoverCard";

interface HomeGridProps {
  stories: Story[];
  onSelect: (chapter: number) => void;
}

export function HomeGrid({ stories, onSelect }: HomeGridProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">WizTome</h1>
        <p className="mt-2 text-neutral-400">
          The Art of War, retold as 13 short stories for modern work. Tap a chapter, then swipe
          through.
        </p>
      </header>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCoverCard key={story.chapter} story={story} onClick={() => onSelect(story.chapter)} />
        ))}
      </div>
    </div>
  );
}
