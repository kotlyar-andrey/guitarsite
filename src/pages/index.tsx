import Head from "next/head";
import { MainLayout } from "~/shared/components/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Гитара с нуля</title>
        <meta
          name="description"
          content="Уроки игры на гитаре для начинающих"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>Main</MainLayout>
    </>
  );
}
