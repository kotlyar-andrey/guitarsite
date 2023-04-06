interface Fret {
  pk: number;
  string: number;
  lad: number;
  number: number;
}

export interface Chord {
  pk: number;
  title: string;
  muz_title: string;
  nove: string;
  order: number;
  start_lad: number;
  bare: boolean;
  lads: Fret[];
  code: string;
}

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

interface Song {
  pk: number;
  title: string;
  chords: Chord[];
  schemes: Scheme[];
  beats: Beat[];
  text: string;
  metronome: number;
}

interface Addition {
  pk: number;
  title: string;
  video: string;
  intro: number;
}

export interface SimpleLesson {
  pk: number;
  title: string;
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
