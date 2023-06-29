import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Song } from "~/entities/lessons";
import { SongView } from "./SongView";

interface Props {
  songs: Song[];
  lessonPk: number;
}

export const SongsContainer = ({ songs, lessonPk }: Props) => {
  return (
    <Tabs>
      <TabList>
        {songs.map((song, index) => (
          <Tab key={`tab${song.pk}`}>{`Текст ${index + 1}`}</Tab>
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
