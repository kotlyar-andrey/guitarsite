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

  const size = store ? store.textSize : 14;

  return (
    <div style={{ fontSize: `${size}px` }} className={styles.markdown}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};
