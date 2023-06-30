import { BiPlus, BiMinus } from "react-icons/bi";
import { useSongSettings } from "~/features/songSettings";
import { useStore } from "~/shared/hooks/store";

export const TextSettingsToolbar: React.FC = () => {
  const store = useStore(useSongSettings, (state) => ({
    increaseTextSize: state.increaseTextSize,
    decreaseTextSize: state.decreaseTextSize,
  }));

  return (
    <>
      <div onClick={store?.decreaseTextSize}>
        <BiMinus />
      </div>
      <div onClick={store?.increaseTextSize}>
        <BiPlus />
      </div>
    </>
  );
};
