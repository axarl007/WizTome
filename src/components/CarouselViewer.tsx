import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Story } from "../data/types";
import { Slide } from "./Slide";
import { DotIndicator } from "./DotIndicator";
import { NavArrow } from "./NavArrow";
import { CloseButton } from "./CloseButton";
import { useCarouselKeyboard } from "../hooks/useCarouselKeyboard";

interface CarouselViewerProps {
  story: Story;
  onClose: () => void;
}

export function CarouselViewer({ story, onClose }: CarouselViewerProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useCarouselKeyboard({ onPrev: scrollPrev, onNext: scrollNext, onClose });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex aspect-[4/5] w-full max-w-[420px] max-h-[85vh] flex-col overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/55 to-transparent p-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
            Chapter {story.chapter} · {story.chapterTitle}
          </span>
          <CloseButton onClick={onClose} />
        </div>

        <div ref={emblaRef} className="h-full overflow-hidden">
          <div className="flex h-full">
            {story.slides.map((slide, i) => (
              <div key={i} className="h-full w-full shrink-0">
                <Slide
                  slide={slide}
                  index={i}
                  total={story.slides.length}
                  accentColor={story.accentColor}
                />
              </div>
            ))}
          </div>
        </div>

        <NavArrow direction="prev" onClick={scrollPrev} disabled={!canScrollPrev} />
        <NavArrow direction="next" onClick={scrollNext} disabled={!canScrollNext} />

        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/55 to-transparent p-4">
          <DotIndicator
            count={story.slides.length}
            selectedIndex={selectedIndex}
            onDotClick={scrollTo}
          />
        </div>
      </div>
    </div>
  );
}
