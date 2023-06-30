import React from "react";
import { Addition } from "../../model/interfaces";
import styles from "./LessonHead.module.scss";
import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";
import { useStore } from "~/shared/hooks/store";
import { useLessonSettings } from "~/features/lessonsSettings";

interface Props {
  lessonPk: number;
  title: string;
  video: string;
  addition: Addition[];
}

export const LessonHead = ({ lessonPk, title, video, addition }: Props) => {
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
        <iframe
          width="560"
          height="315"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </AccordionContainer>
    </div>
  );
};
