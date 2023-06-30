import { BiPlus, BiMinus } from "react-icons/bi";
import { useSongSettings } from "~/features/songSettings";
import { useStore } from "~/shared/hooks/store";

export const BeatSettingsToolbar: React.FC = () => {
  const store = useStore(useSongSettings, (state) => ({
    beatSize: state.beatSize,
    increaseBeatSize: state.increaseBeatSize,
    decreaseBeatSize: state.decreaseBeatSize,
  }));

  return (
    <>
      <div onClick={store?.decreaseBeatSize}>
        <BiMinus />
      </div>
      <div onClick={store?.increaseBeatSize}>
        <BiPlus />
      </div>
    </>
  );
};
