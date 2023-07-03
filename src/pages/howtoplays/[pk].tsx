import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FullLesson, LessonHead, SimpleLesson } from "~/entities/lessons";
import { loadHowtoplay, loadHowtoplaysList } from "~/shared/api/content";
import { MainLayout } from "~/shared/components/MainLayout";
import { SongsContainer } from "~/widgets/lessons";

interface Props {
  lesson: FullLesson;
}

interface Params {
  [key: string]: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const lessons = await loadHowtoplaysList();
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
  const lesson = await loadHowtoplay(params.pk);
  return { props: { lesson } };
};

const Howtoplay = ({ lesson }: Props) => {
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

export default Howtoplay;
