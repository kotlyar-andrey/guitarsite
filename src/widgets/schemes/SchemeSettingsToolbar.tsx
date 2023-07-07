import { BiPlus, BiMinus } from "react-icons/bi";
import { useSongSettings } from "~/features/songSettings";
import { useStore } from "~/shared/hooks/store";

export const SchemeSettingsToolbar: React.FC = () => {
  const store = useStore(useSongSettings, (state) => ({
    increaseSchemeSize: state.increaseSchemeSize,
    decreaseSchemeSize: state.decreaseSchemeSize,
  }));

  return (
    <>
      <div onClick={store?.decreaseSchemeSize}>
        <BiMinus />
      </div>
      <div onClick={store?.increaseSchemeSize}>
        <BiPlus />
      </div>
    </>
  );
};
