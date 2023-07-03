import Head from "next/head";
import { GetStaticProps } from "next";
import { MainLayout } from "~/shared/components/MainLayout";
import { Chord } from "~/entities/chords";
import { loadChords } from "~/shared/api/content";
import { ChordsContainer } from "~/widgets/chords/ChordsContainer";
import { AccordionContainer } from "~/shared/components/AccordionContainer/AccordionContainer";
import { ChordSettingsToolbar } from "~/widgets/chords/ChordSettingsToolbar";

interface Props {
  chords: Chord[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const chords = await loadChords();
  return {
    props: { chords },
  };
};

const notes = ["A", "C", "D", "E", "F", "G", "H"];

const Howtoplays: React.FC<Props> = ({ chords }) => {
  const noteGroups: { [title: string]: Chord[] } = {};

  notes.forEach((note) => {
    noteGroups[note] = chords.filter((chord) => chord.title.startsWith(note));
  });

  return (
    <>
      <Head>
        <title>Гитара с нуля - аккорды</title>
        <meta
          name="description"
          content="Все аккорды на гитаре для начинающих."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <AccordionContainer
          visible={true}
          title="Все аккорды"
          additionToolbar={<ChordSettingsToolbar />}
        >
          {notes.map((note) => (
            <AccordionContainer key={note} visible={true} title={note}>
              <ChordsContainer chords={noteGroups[note]} />
            </AccordionContainer>
          ))}
        </AccordionContainer>
      </MainLayout>
    </>
  );
};

export default Howtoplays;
