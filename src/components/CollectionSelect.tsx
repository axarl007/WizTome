import type { CollectionId } from "../data/types";
import { accentGradient } from "../data/accentGradients";

interface CollectionSelectProps {
  onSelect: (collection: CollectionId) => void;
}

const COLLECTIONS: { id: CollectionId; title: string; description: string; accentColor: string }[] = [
  {
    id: "leaders",
    title: "Founders & Leaders",
    description: "The Art of War, retold as 13 short stories for business leaders.",
    accentColor: "amber",
  },
  {
    id: "careers",
    title: "Early Career",
    description: "The same 13 lessons, retold for navigating your career.",
    accentColor: "sky",
  },
];

export function CollectionSelect({ onSelect }: CollectionSelectProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">WizTome</h1>
        <p className="mt-2 text-neutral-400">Choose how you want The Art of War retold.</p>
      </header>
      <div className="grid w-full gap-4 sm:grid-cols-2">
        {COLLECTIONS.map((collection) => (
          <button
            key={collection.id}
            type="button"
            onClick={() => onSelect(collection.id)}
            className={`group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br text-left shadow-lg ring-1 ring-white/10 transition-transform hover:scale-[1.02] ${accentGradient(collection.accentColor)}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="relative z-10 p-5">
              <h2 className="text-xl font-bold text-white">{collection.title}</h2>
              <p className="mt-2 text-sm text-white/80">{collection.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
