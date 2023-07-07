import React from "react";

import { Song } from "~/entities/lessons";

import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";
import { TextMarkdown } from "~/shared/components/TextMarkdown";
import { ChordsContainer } from "../../chords/ChordsContainer";
import { useLessonSettings } from "~/features/lessonsSettings";
import { useStore } from "~/shared/hooks/store";
import { ChordSettingsToolbar } from "~/widgets/chords/ChordSettingsToolbar";
import { TextSettingsToolbar } from "./TextSettingsToolbar";
import { SchemesContainer } from "~/widgets/schemes/SchemesContainer";
import { SchemeSettingsToolbar } from "~/widgets/schemes/SchemeSettingsToolbar";

interface Props {
  song: Song;
  lessonPk: number;
}

export const SongView: React.FC<Props> = ({ song, lessonPk }) => {
  const store = useStore(useLessonSettings, (state) => ({
    getLessonSettings: state.getSettingsByPk,
    toggleChordsVisible: state.toggleChordsVisible,
    toggleSchemesVisible: state.toggleSchemesVisible,
  }));
  const settings = store?.getLessonSettings(lessonPk);

  return (
    <div>
      {song.chords.length > 0 && (
        <AccordionContainer
          title="Аккорды"
          toggleVisible={() => {
            store?.toggleChordsVisible(lessonPk);
          }}
          visible={settings ? settings.chordsVisible : true}
          additionToolbar={<ChordSettingsToolbar />}
        >
          <ChordsContainer chords={song.chords} />
        </AccordionContainer>
      )}
      {song.schemes.length > 0 && (
        <AccordionContainer
          title="Бои и переборы"
          toggleVisible={() => {
            store?.toggleSchemesVisible(lessonPk);
          }}
          visible={settings ? settings.schemesVisible : true}
          additionToolbar={<SchemeSettingsToolbar />}
        >
          <SchemesContainer schemes={song.schemes} />
        </AccordionContainer>
      )}
      {/* {song.beats.length > 0 && (
        <AccordionContainer
          title="Ритмические рисунки"
          toggleVisible={() => {
            store?.toggleBeatsVisible(lessonPk);
          }}
          visible={settings ? settings.beatsVisible : false}
          additionToolbar={<BeatSettingsToolbar />}
        >
          <BeatsContainer beats={song.beats} />
        </AccordionContainer>
      )} */}
      <AccordionContainer
        title="Текст"
        visible={true}
        additionToolbar={<TextSettingsToolbar />}
      >
        <TextMarkdown text={song.text} />
      </AccordionContainer>
    </div>
  );
};
