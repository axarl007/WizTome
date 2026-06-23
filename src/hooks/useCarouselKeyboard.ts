import { useEffect } from "react";

interface UseCarouselKeyboardOptions {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export function useCarouselKeyboard({ onPrev, onNext, onClose }: UseCarouselKeyboardOptions) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") onPrev();
      else if (event.key === "ArrowRight") onNext();
      else if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, onClose]);
}
