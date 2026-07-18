export const ACCENT_GRADIENTS: Record<string, string> = {
  amber: "from-amber-400 via-amber-600 to-amber-900",
  red: "from-red-400 via-red-600 to-red-900",
  violet: "from-violet-400 via-violet-600 to-violet-900",
  emerald: "from-emerald-400 via-emerald-600 to-emerald-900",
  orange: "from-orange-400 via-orange-600 to-orange-900",
  cyan: "from-cyan-400 via-cyan-600 to-cyan-900",
  blue: "from-blue-400 via-blue-600 to-blue-900",
  fuchsia: "from-fuchsia-400 via-fuchsia-600 to-fuchsia-900",
  lime: "from-lime-400 via-lime-600 to-lime-900",
  teal: "from-teal-400 via-teal-600 to-teal-900",
  indigo: "from-indigo-400 via-indigo-600 to-indigo-900",
  rose: "from-rose-400 via-rose-600 to-rose-900",
  sky: "from-sky-400 via-sky-600 to-sky-900",
};

export function accentGradient(accentColor: string): string {
  return ACCENT_GRADIENTS[accentColor] ?? "from-neutral-500 via-neutral-700 to-neutral-900";
}
