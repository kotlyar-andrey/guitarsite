import { BiRotateLeft, BiRotateRight, BiPlus, BiMinus } from "react-icons/bi";
import { useSongSettings } from "~/features/songSettings";
import { useStore } from "~/shared/hooks/store";

export const ChordSettingsToolbar: React.FC = () => {
  const store = useStore(useSongSettings, (state) => ({
    chordOrientation: state.chordOrientation,
    chordSize: state.chordSize,
    increaseChordSize: state.increaseChordSize,
    decreaseChordSize: state.decreaseChordSize,
    toggleOrientation: state.toggleOrientation,
  }));

  return (
    <>
      <div onClick={store?.toggleOrientation}>
        {store?.chordOrientation === "horizontal" ? (
          <BiRotateLeft />
        ) : (
          <BiRotateRight />
        )}
      </div>
      <div onClick={store?.decreaseChordSize}>
        <BiMinus />
      </div>
      <div onClick={store?.increaseChordSize}>
        <BiPlus />
      </div>
    </>
  );
};
