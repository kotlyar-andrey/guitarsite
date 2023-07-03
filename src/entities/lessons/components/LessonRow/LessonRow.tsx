import Link from "next/link";
import { SimpleLesson } from "../../model/interfaces";
import styles from "./LessonRow.module.scss";

type LessonTypes = "lessons" | "howtoplays";

interface Props {
  lesson: SimpleLesson;
  showSongs?: boolean;
  lessonType: LessonTypes;
}

export const LessonRow: React.FC<Props> = ({
  lesson,
  showSongs,
  lessonType,
}) => {
  return (
    <div className={styles.lesson_row}>
      <div>
        <Link href={`/${lessonType}/${lesson.pk}`}>{lesson.title}</Link>
      </div>
      <div className={styles.songs}>
        {showSongs &&
          lesson.songs.map((song) => (
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
