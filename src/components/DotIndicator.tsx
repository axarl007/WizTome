interface DotIndicatorProps {
  count: number;
  selectedIndex: number;
  onDotClick: (index: number) => void;
}

export function DotIndicator({ count, selectedIndex, onDotClick }: DotIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onDotClick(i)}
          className={`rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 ${
            i === selectedIndex
              ? "w-6 h-1.5 bg-white"
              : "w-1.5 h-1.5 bg-white/30 hover:bg-white/55"
          }`}
        />
      ))}
    </div>
  );
}
