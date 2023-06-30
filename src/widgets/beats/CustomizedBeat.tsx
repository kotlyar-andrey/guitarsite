import { Beat, BeatView, PlunkView } from "~/entities/beats";
import { useSongSettings } from "~/features/songSettings";
import { useStore } from "~/shared/hooks/store";

interface Props {
  beat: Beat;
}

export const CustomizedBeat: React.FC<Props> = ({ beat }) => {
  const beatSize = useStore(useSongSettings, (state) => state.beatSize);
  const size = beatSize || 3;

  const beatStyle = {
    width: `${size * 60 * 2}px`,
    height: `${size * 60}px`,
    margin: "2px",
  };

  const plunkStyle = {
    width: `${(size * 60) / 2.5}px`,
    height: `${size * 60}px`,
    margin: "2px",
  };

  return beat.beat_type === 0 ? (
    <div style={beatStyle}>
      <BeatView beat={beat} />
    </div>
  ) : (
    <div style={plunkStyle}>
      <PlunkView beat={beat} />
    </div>
  );
};
