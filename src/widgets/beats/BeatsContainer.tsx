import { Beat } from "~/entities/beats";
import { CustomizedBeat } from "./CustomizedBeat";
import styles from "./BeatsContainer.module.scss";

interface Props {
  beats: Beat[];
}

export const BeatsContainer: React.FC<Props> = ({ beats }) => {
  return (
    <div className={styles.container}>
      {beats.map((beat) => (
        <CustomizedBeat key={beat.pk} beat={beat} />
      ))}
    </div>
  );
};
