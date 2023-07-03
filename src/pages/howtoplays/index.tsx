import Head from "next/head";
import { GetStaticProps } from "next";
import { MainLayout } from "~/shared/components/MainLayout";
import { loadHowtoplaysList } from "~/shared/api/content";
import { LessonRow, SimpleLesson } from "~/entities/lessons";

interface Props {
  howtoplays: SimpleLesson[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const howtoplays = await loadHowtoplaysList();
  return {
    props: { howtoplays },
  };
};

const Howtoplays: React.FC<Props> = ({ howtoplays }) => {
  return (
    <>
      <Head>
        <title>Гитара с нуля - разборы</title>
        <meta
          name="description"
          content="Разборы игры на гитаре для начинающих. Как играть на гитаре"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {howtoplays.map((lesson: SimpleLesson) => (
          <LessonRow
            key={lesson.pk}
            lesson={lesson}
            showSongs={false}
            lessonType="howtoplays"
          />
        ))}
      </MainLayout>
    </>
  );
};

export default Howtoplays;
