import { useState } from "react";
import { stories } from "./data/artOfWarStories";
import { careerStories } from "./data/careerStories";
import type { CollectionId } from "./data/types";
import { CollectionSelect } from "./components/CollectionSelect";
import { HomeGrid } from "./components/HomeGrid";
import { CarouselViewer } from "./components/CarouselViewer";

const COLLECTION_COPY: Record<CollectionId, { title: string; subtitle: string }> = {
  leaders: {
    title: "WizTome",
    subtitle:
      "The Art of War, retold as 13 short stories for business leaders. Tap a chapter, then swipe through.",
  },
  careers: {
    title: "WizTome",
    subtitle:
      "The same 13 lessons, retold for navigating your career. Tap a chapter, then swipe through.",
  },
};

function App() {
  const [activeCollection, setActiveCollection] = useState<CollectionId | null>(null);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  if (!activeCollection) {
    return <CollectionSelect onSelect={setActiveCollection} />;
  }

  const collectionStories = activeCollection === "careers" ? careerStories : stories;
  const activeStory = collectionStories.find((story) => story.chapter === activeChapter) ?? null;
  const { title, subtitle } = COLLECTION_COPY[activeCollection];

  return (
    <div className="min-h-screen bg-neutral-950">
      <HomeGrid
        stories={collectionStories}
        onSelect={setActiveChapter}
        title={title}
        subtitle={subtitle}
        onBack={() => {
          setActiveCollection(null);
          setActiveChapter(null);
        }}
      />
      {activeStory && (
        <CarouselViewer story={activeStory} onClose={() => setActiveChapter(null)} />
      )}
    </div>
  );
}

export default App;
