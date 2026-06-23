interface CloseButtonProps {
  onClick: () => void;
}

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close story"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
