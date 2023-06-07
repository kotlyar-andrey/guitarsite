import { Addition } from "../../model/interfaces";
import styles from "./LessonHead.module.scss";

interface Props {
  title: string;
  video: string;
  addition: Addition[];
}

export const LessonHead = ({ title, video, addition }: Props) => {
  return (
    <div className={styles.lesson_head}>
      <h1>{title}</h1>
      <div className={styles.horizontal_row}>
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};
