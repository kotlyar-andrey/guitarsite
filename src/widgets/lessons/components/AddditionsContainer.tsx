import { Addition, SimpleLesson } from "~/entities/lessons";
import { useLessonSettings } from "~/features/lessonsSettings";
import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";
import { useStore } from "~/shared/hooks/store";
import styles from "./AdditionsContainer.module.scss";
import { YoutubeVideo } from "~/shared/components/YoutubeVideo";
import Link from "next/link";

interface Props {
  lessonPk: number;
  lessonNumber: number;
  additions: Addition[];
  howtoplays: SimpleLesson[];
}

export const AdditionsContainer: React.FC<Props> = ({
  lessonPk,
  lessonNumber,
  additions,
  howtoplays,
}) => {
  const howtoplaysForLesson = howtoplays
    .filter((item) => item.start_lesson && item.start_lesson <= lessonNumber)
    .sort((item1, item2) =>
      item1.start_lesson && item2.start_lesson
        ? item2.start_lesson - item1.start_lesson
        : -1
    )
    .slice(0, 5)
    .map((item) => ({ pk: item.pk, title: item.title }));

  const additionsExist = additions.length > 0 || howtoplaysForLesson.length > 0;

  const store = useStore(useLessonSettings, (state) => ({
    getLessonSettings: state.getSettingsByPk,
    toggleAdditionsVisible: state.toggleAdditionsVisible,
  }));
  const settings = store?.getLessonSettings(lessonPk);

  return additionsExist ? (
    <AccordionContainer
      title="Дополнения"
      visible={settings ? settings.additionsVisible : true}
      toggleVisible={() => {
        store?.toggleAdditionsVisible(lessonPk);
      }}
    >
      {additions.length > 0 && (
        <div className={styles.video_container}>
          {additions.map((addition) => (
            <div key={addition.pk}>
              <div>{addition.title}</div>
              <YoutubeVideo videoUrl={addition.video} size="small" />
            </div>
          ))}
        </div>
      )}
      {howtoplaysForLesson.length > 0 && (
        <div className={styles.howtoplays}>
          <p>Разборы для дополнительное практики:</p>
          {howtoplaysForLesson.map((howtoplay) => (
            <Link key={howtoplay.pk} href={`/howtoplays/${howtoplay.pk}`}>
              {howtoplay.title}
            </Link>
          ))}
        </div>
      )}
    </AccordionContainer>
  ) : (
    <div />
  );
};
