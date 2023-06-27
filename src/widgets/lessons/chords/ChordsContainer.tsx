import { Chord } from "~/entities/chords";
import { CustomizedChord } from "./CustomizedChord";

import styles from "./ChordsContainer.module.scss";

interface Props {
  chords: Chord[];
}

export const ChordsContainer: React.FC<Props> = ({ chords }) => {
  return (
    <div className={styles.container}>
      {chords.map((chord) => (
        <CustomizedChord key={chord.pk} chord={chord} />
      ))}
    </div>
  );
};
