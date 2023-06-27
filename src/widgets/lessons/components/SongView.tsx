import React from "react";
import ReactMarkdown from "react-markdown";

import { Song } from "~/entities/lessons";

import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";
import { TextMarkdown } from "~/shared/components/TextMarkdown";
import { ChordsContainer } from "../chords/ChordsContainer";

interface Props {
  song: Song;
}

export const SongView = ({ song }: Props) => {
  // TODO: move state to redux
  const [chordsVisible, setChordsVisible] = React.useState<boolean>(true);
  const [beatsVisible, setBeatsVisible] = React.useState<boolean>(true);

  return (
    <div>
      <h3>{song.title}</h3>
      <AccordionContainer
        title="Аккорды"
        toggleVisible={() => {
          setChordsVisible(!chordsVisible);
        }}
        visible={chordsVisible}
      >
        <ChordsContainer chords={song.chords} />
      </AccordionContainer>
      <AccordionContainer
        title="Ритмические бои"
        toggleVisible={() => {
          setBeatsVisible(!beatsVisible);
        }}
        visible={beatsVisible}
      >
        <div>Content</div>
      </AccordionContainer>
      <h3>Text:</h3>
      <TextMarkdown text={song.text} />
    </div>
  );
};
