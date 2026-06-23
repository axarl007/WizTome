export const ACCENT_GRADIENTS: Record<string, string> = {
  amber: "from-amber-500 to-amber-800",
  red: "from-red-500 to-red-800",
  violet: "from-violet-500 to-violet-800",
  emerald: "from-emerald-500 to-emerald-800",
  orange: "from-orange-500 to-orange-800",
  cyan: "from-cyan-500 to-cyan-800",
  blue: "from-blue-500 to-blue-800",
  fuchsia: "from-fuchsia-500 to-fuchsia-800",
  lime: "from-lime-500 to-lime-800",
  teal: "from-teal-500 to-teal-800",
  indigo: "from-indigo-500 to-indigo-800",
  rose: "from-rose-500 to-rose-800",
  sky: "from-sky-500 to-sky-800",
};

export function accentGradient(accentColor: string): string {
  return ACCENT_GRADIENTS[accentColor] ?? "from-neutral-500 to-neutral-800";
}
