import Link from "next/link";
import { SimpleLesson } from "../../models/interfaces";
import styles from "./LessonRow.module.scss";

interface Props {
  lesson: SimpleLesson;
}

export const LessonRow = ({ lesson }: Props) => {
  return (
    <div className={styles.lesson_row}>
      <div>
        <Link href={`/lessons/${lesson.pk}`}>{lesson.title}</Link>
      </div>
      <div className={styles.songs}>
        {lesson.songs.map((song) => (
          <span key={song.pk}>
            {song.title}
            <br />
          </span>
        ))}
      </div>
      <hr />
    </div>
  );
};
