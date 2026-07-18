import type { CollectionId } from "../data/types";

interface CollectionSelectProps {
  onSelect: (collection: CollectionId) => void;
}

interface Collection {
  id: CollectionId;
  index: string;
  headline: string;
  tagline: string;
  description: string;
  fromColor: string;
  viaColor: string;
  toColor: string;
  orb: string;
}

const COLLECTIONS: Collection[] = [
  {
    id: "leaders",
    index: "I",
    headline: "Founders\n& Leaders",
    tagline: "Strategy · Leadership · Execution",
    description:
      "The Art of War, retold as 13 short stories for founders, executives, and business leaders.",
    fromColor: "from-amber-300",
    viaColor: "via-amber-500",
    toColor: "to-orange-700",
    orb: "bg-amber-500/25",
  },
  {
    id: "careers",
    index: "II",
    headline: "Early\nCareer",
    tagline: "Ambition · Growth · Opportunity",
    description:
      "The same 13 lessons, reframed for ambitious professionals navigating their career.",
    fromColor: "from-sky-300",
    viaColor: "via-sky-500",
    toColor: "to-blue-700",
    orb: "bg-sky-500/25",
  },
];

export function CollectionSelect({ onSelect }: CollectionSelectProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#12111e] px-4 py-16">

      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-1/3 top-1/4 h-[600px] w-[600px] rounded-full bg-amber-500/22 blur-[140px]" />
        <div className="absolute -right-1/3 bottom-1/4 h-[600px] w-[600px] rounded-full bg-sky-500/22 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Header */}
      <header className="relative z-10 mb-12 text-center animate-fade-up">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/25" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
            The Art of War
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/25" />
        </div>
        <h1 className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          WizTome
        </h1>
        <p className="mt-3 text-sm text-white/45 sm:text-base">
          Choose your collection to begin reading.
        </p>
      </header>

      {/* Cards */}
      <div className="relative z-10 grid w-full max-w-xl gap-4 sm:max-w-2xl sm:grid-cols-2">
        {COLLECTIONS.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelect(c.id)}
            style={{ animationDelay: `${(i + 1) * 80}ms` }}
            className={`animate-fade-up group relative flex min-h-[360px] w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br text-left ring-1 ring-white/10 transition-all duration-300 ease-out hover:scale-[1.025] hover:ring-white/25 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${c.fromColor} ${c.viaColor} ${c.toColor}`}
          >
            {/* Layered overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            {/* Top strip */}
            <div className="relative z-10 flex items-start justify-between p-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Collection {c.index}
              </span>
              <span className="rounded-full bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur-sm">
                13 chapters
              </span>
            </div>

            {/* Main content */}
            <div className="relative z-10 mt-auto p-6 pt-0">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/40">
                {c.tagline}
              </p>
              <h2 className="font-serif whitespace-pre-line text-3xl font-bold leading-[1.1] text-white sm:text-4xl">
                {c.headline}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {c.description}
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm font-semibold text-white/90 transition-colors duration-200 group-hover:text-white">
                  Read stories
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  aria-hidden
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
        ))}
      </div>

      {/* Footer */}
      <p className="relative z-10 mt-12 text-center text-[11px] tracking-wide text-white/20 animate-fade-up delay-300">
        Based on Sun Tzu's <em>The Art of War</em>
      </p>
    </div>
  );
}
