export interface Slide {
  heading: string;
  body: string;
}

export interface Story {
  chapter: number;
  chapterTitle: string;
  conceptName: string;
  setting: string;
  accentColor: string;
  slides: Slide[];
}
