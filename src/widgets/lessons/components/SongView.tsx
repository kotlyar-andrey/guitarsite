import React from "react";

import { Song } from "~/entities/lessons";

import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";
import { TextMarkdown } from "~/shared/components/TextMarkdown";
import { ChordsContainer } from "../../chords/ChordsContainer";
import { useLessonSettings } from "~/features/lessonsSettings";
import { useStore } from "~/shared/hooks/store";
import { ChordSettingsToolbar } from "~/widgets/chords/ChordSettingsToolbar";

interface Props {
  song: Song;
  lessonPk: number;
}

export const SongView: React.FC<Props> = ({ song, lessonPk }) => {
  const store = useStore(useLessonSettings, (state) => ({
    getLessonSettings: state.getSettingsByPk,
    toggleChordsVisible: state.toggleChordsVisible,
    toggleBeatsVisible: state.toggleBeatsVisible,
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
      {song.beats.length > 0 && (
        <AccordionContainer
          title="Ритмические бои"
          toggleVisible={() => {
            store?.toggleBeatsVisible(lessonPk);
          }}
          visible={settings ? settings.beatsVisible : true}
        >
          <div>Content</div>
        </AccordionContainer>
      )}
      <h3>Text:</h3>
      <TextMarkdown text={song.text} />
    </div>
  );
};
