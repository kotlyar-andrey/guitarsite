import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  MAX_BEAT_SIZE,
  MAX_CHORD_SIZE,
  MAX_SCHEME_SIZE,
  MAX_TEXT_SIZE,
  MIN_BEAT_SIZE,
  MIN_CHORD_SIZE,
  MIN_SCHEME_SIZE,
  MIN_TEXT_SIZE,
} from "./consts";

interface SongSetting {
  chordOrientation: "horizontal" | "vertical";
  chordSize: number;
  beatSize: number;
  schemeSize: number;
  textSize: number;
  increaseChordSize: () => void;
  decreaseChordSize: () => void;
  increaseBeatSize: () => void;
  decreaseBeatSize: () => void;
  increaseSchemeSize: () => void;
  decreaseSchemeSize: () => void;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  toggleOrientation: () => void;
}

export const useSongSettings = create<SongSetting>()(
  persist(
    (set, get) => ({
      chordOrientation: "horizontal",
      chordSize: 3,
      beatSize: 3,
      schemeSize: 3,
      textSize: 14,
      increaseChordSize: () => {
        const currentSize = get().chordSize;
        if (currentSize < MAX_CHORD_SIZE) {
          set({ chordSize: currentSize + 1 });
        }
      },
      decreaseChordSize: () => {
        const currentSize = get().chordSize;
        if (currentSize > MIN_CHORD_SIZE) {
          set({ chordSize: currentSize - 1 });
        }
      },
      increaseBeatSize: () => {
        const currentSize = get().beatSize;
        if (currentSize < MAX_BEAT_SIZE) {
          set({ beatSize: currentSize + 1 });
        }
      },
      decreaseBeatSize: () => {
        const currentSize = get().beatSize;
        if (currentSize > MIN_BEAT_SIZE) {
          set({ beatSize: currentSize - 1 });
        }
      },
      increaseSchemeSize: () => {
        const currentSize = get().schemeSize;
        if (currentSize < MAX_SCHEME_SIZE) {
          set({ schemeSize: currentSize + 1 });
        }
      },
      decreaseSchemeSize: () => {
        const currentSize = get().schemeSize;
        if (currentSize > MIN_SCHEME_SIZE) {
          set({ schemeSize: currentSize - 1 });
        }
      },
      increaseTextSize: () => {
        const currentSize = get().textSize;
        if (currentSize < MAX_TEXT_SIZE) {
          set({ textSize: currentSize + 2 });
        }
      },
      decreaseTextSize: () => {
        const currentSize = get().textSize;
        if (currentSize > MIN_TEXT_SIZE) {
          set({ textSize: currentSize - 2 });
        }
      },
      toggleOrientation: () => {
        set((state) => ({
          chordOrientation:
            state.chordOrientation === "horizontal" ? "vertical" : "horizontal",
        }));
      },
    }),
    {
      name: "songsettings",
    }
  )
);
