import React from "react";
import { Addition } from "../../model/interfaces";
import styles from "./LessonHead.module.scss";
import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";

interface Props {
  title: string;
  video: string;
  addition: Addition[];
}

export const LessonHead = ({ title, video, addition }: Props) => {
  const [videoVisible, setVideoVisible] = React.useState(true);
  return (
    <div className={styles.lesson_head}>
      <h1>{title}</h1>
      <AccordionContainer
        title="Видео"
        visible={videoVisible}
        toggleVisible={() => {
          setVideoVisible(!videoVisible);
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
