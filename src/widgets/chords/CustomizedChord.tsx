import { Chord, ChordView } from "~/entities/chords";
import { useSongSettings } from "~/features/songSettings";
import { useStore } from "~/shared/hooks/store";

// import styles from "./CustomizedChord.module.scss";

interface Props {
  chord: Chord;
}

export const CustomizedChord: React.FC<Props> = ({ chord }) => {
  const store = useStore(useSongSettings, (state) => ({
    orientation: state.chordOrientation,
    chordSize: state.chordSize,
  }));
  const style = _getChordStyle(
    store ? store.chordSize : 3,
    store ? store.orientation : "horizontal"
  );
  return (
    <div style={style}>
      <ChordView chord={chord} orientation={store?.orientation} />
    </div>
  );
};

const _getChordStyle = (
  size: number,
  orientation: "horizontal" | "vertical"
) => {
  const baseSize = size * 60;

  const width =
    orientation === "vertical" ? `${baseSize}px` : `${2 * baseSize}px`;
  const height =
    orientation === "vertical" ? `${2 * baseSize}px` : `${baseSize}px`;

  return { width, height };
};
