import { Chord, ChordView } from "~/entities/chords";

// import styles from "./CustomizedChord.module.scss";

interface Props {
  chord: Chord;
}

export const CustomizedChord: React.FC<Props> = ({ chord }) => {
  return (
    <div style={{ width: "400px", height: "200px" }}>
      <ChordView chord={chord} orientation="horizontal" />
    </div>
  );
};
