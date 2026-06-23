interface NavArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}

export function NavArrow({ direction, onClick, disabled }: NavArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className={`absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 disabled:opacity-0 disabled:pointer-events-none ${
        direction === "prev" ? "left-3" : "right-3"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
