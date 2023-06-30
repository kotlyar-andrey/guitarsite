import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  MAX_BEAT_SIZE,
  MAX_CHORD_SIZE,
  MIN_BEAT_SIZE,
  MIN_CHORD_SIZE,
} from "./consts";

interface SongSetting {
  chordOrientation: "horizontal" | "vertical";
  chordSize: number;
  beatSize: number;
  textSize: number;
  increaseChordSize: () => void;
  decreaseChordSize: () => void;
  increaseBeatSize: () => void;
  decreaseBeatSize: () => void;
  toggleOrientation: () => void;
}

export const useSongSettings = create<SongSetting>()(
  persist(
    (set, get) => ({
      chordOrientation: "horizontal",
      chordSize: 3,
      beatSize: 3,
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
