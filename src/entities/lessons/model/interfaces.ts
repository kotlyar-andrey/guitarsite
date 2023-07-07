import { Chord } from "~/entities/chords";

export interface Scheme {
  pk: number;
  image: string;
}

export interface Beat {
  pk: number;
  beat_type: number;
  inscription: string;
  duration: number;
  strikes: string[];
}

export interface Song {
  pk: number;
  title: string;
  chords: Chord[];
  schemes: Scheme[];
  beats: Beat[];
  text: string;
  metronome: number;
}

export interface Addition {
  pk: number;
  title: string;
  video: string;
  intro: number;
}

export interface SimpleLesson {
  pk: number;
  title: string;
  start_lesson: number | null;
  songs: { pk: string; title: string }[];
}

export interface FullLesson {
  pk: number;
  lesson_type: number;
  number: number;
  title: string;
  video: string;
  intro: number;
  songs: Song[];
  additions: Addition[];
  start_lesson?: number;
  rating: number;
}
