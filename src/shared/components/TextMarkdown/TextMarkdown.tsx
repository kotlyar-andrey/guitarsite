import ReactMarkdown from "react-markdown";
import styles from "./TextMarkdown.module.scss";
import { useStore } from "~/shared/hooks/store";
import { useSongSettings } from "~/features/songSettings";

interface Props {
  text: string;
}

export const TextMarkdown: React.FC<Props> = ({ text }) => {
  const store = useStore(useSongSettings, (state) => ({
    textSize: state.textSize,
  }));
  return (
    <div
      style={{ fontSize: `${store?.textSize}px` }}
      className={styles.markdown}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};
