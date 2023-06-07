import { Song } from "~/entities/lessons";

interface Props {
  song: Song;
}

export const SongView = ({ song }: Props) => {
  return <div>{song.title}</div>;
};
