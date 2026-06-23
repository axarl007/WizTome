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
          className={`h-1.5 rounded-full transition-all ${
            i === selectedIndex ? "w-5 bg-white" : "w-1.5 bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}
