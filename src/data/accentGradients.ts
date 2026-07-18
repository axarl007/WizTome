export const ACCENT_GRADIENTS: Record<string, string> = {
  amber: "from-amber-300 via-amber-500 to-amber-700",
  red: "from-red-300 via-red-500 to-red-700",
  violet: "from-violet-300 via-violet-500 to-violet-700",
  emerald: "from-emerald-300 via-emerald-500 to-emerald-700",
  orange: "from-orange-300 via-orange-500 to-orange-700",
  cyan: "from-cyan-300 via-cyan-500 to-cyan-700",
  blue: "from-blue-300 via-blue-500 to-blue-700",
  fuchsia: "from-fuchsia-300 via-fuchsia-500 to-fuchsia-700",
  lime: "from-lime-300 via-lime-500 to-lime-700",
  teal: "from-teal-300 via-teal-500 to-teal-700",
  indigo: "from-indigo-300 via-indigo-500 to-indigo-700",
  rose: "from-rose-300 via-rose-500 to-rose-700",
  sky: "from-sky-300 via-sky-500 to-sky-700",
};

export function accentGradient(accentColor: string): string {
  return ACCENT_GRADIENTS[accentColor] ?? "from-neutral-500 via-neutral-700 to-neutral-900";
}
