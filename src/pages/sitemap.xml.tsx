import { SimpleLesson } from "~/entities/lessons";
import { loadHowtoplaysList, loadLessonsList } from "~/shared/api/content";
import { SITE_DOMAIN } from "~/shared/config/consts";

interface Props {
  sitemap: string;
}

const SiteMap = ({ sitemap }: Props) => {
  return sitemap;
};

const generateSiteMap = (
  lessons: SimpleLesson[],
  howtoplays: SimpleLesson[]
) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_DOMAIN}</loc>
    </url>
    <url>
    <loc>${SITE_DOMAIN}/howtoplays</loc>
    </url>
    <url>
    <loc>${SITE_DOMAIN}/chords</loc>
    </url>
    ${lessons
      .map(({ pk }) => {
        return `
      <url>
          <loc>${`${SITE_DOMAIN}/lessons/${pk}`}</loc>
      </url>
    `;
      })
      .join("")}
      ${howtoplays
        .map(({ pk }) => {
          return `
        <url>
            <loc>${`${SITE_DOMAIN}/howtoplays/${pk}`}</loc>
        </url>
      `;
        })
        .join("")}
  </urlset>
`;
};

export async function getServerSideProps() {
  const lessons = await loadLessonsList();
  const howtoplays = await loadHowtoplaysList();
  const sitemap = generateSiteMap(lessons, howtoplays);

  return {
    props: { sitemap },
  };
}

export default SiteMap;
