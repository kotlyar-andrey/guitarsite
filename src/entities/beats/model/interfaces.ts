export interface Beat {
  pk: number;
  beat_type: number;
  inscription: string;
  duration: number;
  strikes: string[];
}

export interface BeatColors {
  secondary: string;
  inscription: string;
  beat: string;
}
