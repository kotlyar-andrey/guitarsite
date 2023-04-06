import Head from "next/head";
import { GetStaticProps } from "next";
import { MainLayout } from "~/shared/components/MainLayout";
import { loadLessonsList } from "~/shared/api/content";
import { LessonRow, SimpleLesson } from "~/entities/lessons";

interface Props {
  lessons: SimpleLesson[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const lessons = await loadLessonsList();
  return {
    props: { lessons },
  };
};

const Home = ({ lessons }: Props) => {
  return (
    <>
      <Head>
        <title>Гитара с нуля - уроки</title>
        <meta
          name="description"
          content="Уроки игры на гитаре для начинающих"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {lessons.map((lesson: SimpleLesson) => (
          <LessonRow key={lesson.pk} lesson={lesson} />
          // <div key={lesson.pk}>
          //   <p>
          //     <Link href={`/lessons/${lesson.pk}`}>{lesson.title}</Link>
          //   </p>
          //   <p>
          //     {lesson.songs.map((song) => (
          //       <span key={song.pk}>
          //         {song.title}
          //         <br></br>
          //       </span>
          //     ))}
          //   </p>
          //   <hr />
          // </div>
        ))}
      </MainLayout>
    </>
  );
};

export default Home;
