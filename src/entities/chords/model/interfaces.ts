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
