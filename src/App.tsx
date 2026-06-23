import { useState } from "react";
import { stories } from "./data/artOfWarStories";
import { HomeGrid } from "./components/HomeGrid";
import { CarouselViewer } from "./components/CarouselViewer";

function App() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const activeStory = stories.find((story) => story.chapter === activeChapter) ?? null;

  return (
    <div className="min-h-screen bg-neutral-950">
      <HomeGrid stories={stories} onSelect={setActiveChapter} />
      {activeStory && (
        <CarouselViewer story={activeStory} onClose={() => setActiveChapter(null)} />
      )}
    </div>
  );
}

export default App;
