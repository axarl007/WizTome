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

  const progress = story.slides.length > 1
    ? (selectedIndex / (story.slides.length - 1)) * 100
    : 100;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="animate-scale-in relative flex w-full max-w-[430px] flex-col overflow-hidden rounded-t-3xl bg-neutral-900 shadow-2xl ring-1 ring-white/10 sm:rounded-3xl"
        style={{ height: "min(88vh, 620px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Reading progress bar */}
        <div className="absolute inset-x-0 top-0 z-30 h-0.5 bg-white/[0.08]">
          <div
            className="h-full bg-white/50 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between bg-gradient-to-b from-black/65 to-transparent px-4 pb-8 pt-5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
              Chapter {story.chapter}
            </p>
            <p className="mt-0.5 text-sm font-medium text-white/80">
              {story.chapterTitle}
            </p>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        {/* Slides */}
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

        {/* Bottom dots */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/60 to-transparent pb-5 pt-8">
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
