import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Song } from "~/entities/lessons";
import { SongView } from "./SongView";
import styles from "./SongsContainer.module.scss";

interface Props {
  songs: Song[];
  lessonPk: number;
}

export const SongsContainer = ({ songs, lessonPk }: Props) => {
  return (
    <Tabs>
      <TabList>
        {songs.map((song) => (
          <Tab
            className={styles.song_tab}
            selectedClassName={styles.selected}
            key={`tab${song.pk}`}
          >
            {song.title}
          </Tab>
        ))}
      </TabList>
      {songs.map((song) => (
        <TabPanel key={`panel${song.pk}`}>
          <SongView song={song} lessonPk={lessonPk} />
        </TabPanel>
      ))}
    </Tabs>
  );
};
