import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ChordView } from "~/entities/chords";
import { FullLesson, LessonHead, SimpleLesson } from "~/entities/lessons";
import { loadLesson, loadLessonsList } from "~/shared/api/content";
import { MainLayout } from "~/shared/components/MainLayout";
import { SongView } from "~/widgets/lessons";
import { SongsContainer } from "~/widgets/lessons/components/SongsContainer";

interface Props {
  lesson: FullLesson;
}

interface Params {
  [key: string]: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const lessons = await loadLessonsList();
  const paths = lessons.map((lesson: SimpleLesson) => ({
    params: {
      pk: lesson.pk.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const lesson = await loadLesson(params.pk);
  return { props: { lesson } };
};

const Lesson = ({ lesson }: Props) => {
  return (
    <>
      <Head>
        <title>{`Гитара с нуля - ${lesson.title}`}</title>
        <meta name="description" content={lesson.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <LessonHead
          lessonPk={lesson.pk}
          title={lesson.title}
          video={lesson.video}
          addition={lesson.additions}
        />
        <SongsContainer songs={lesson.songs} lessonPk={lesson.pk} />
      </MainLayout>
    </>
  );
};

export default Lesson;
