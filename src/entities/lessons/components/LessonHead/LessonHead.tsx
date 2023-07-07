import React from "react";
import styles from "./LessonHead.module.scss";
import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";
import { useStore } from "~/shared/hooks/store";
import { useLessonSettings } from "~/features/lessonsSettings";
import { YoutubeVideo } from "~/shared/components/YoutubeVideo";

interface Props {
  lessonPk: number;
  title: string;
  video: string;
}

export const LessonHead: React.FC<Props> = ({ lessonPk, title, video }) => {
  const store = useStore(useLessonSettings, (state) => ({
    getLessonSettings: state.getSettingsByPk,
    toggleVideoVisible: state.toggleVideoVisible,
  }));
  const settings = store?.getLessonSettings(lessonPk);
  return (
    <div className={styles.lesson_head}>
      <h1>{title}</h1>
      <AccordionContainer
        title="Видео"
        visible={settings ? settings.videoVisible : true}
        toggleVisible={() => {
          store?.toggleVideoVisible(lessonPk);
        }}
      >
        <YoutubeVideo videoUrl={video} />
      </AccordionContainer>
    </div>
  );
};
