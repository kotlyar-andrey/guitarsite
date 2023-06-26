import ReactMarkdown from "react-markdown";
import styles from "./TextMarkdown.module.scss";

interface Props {
  text: string;
}

export const TextMarkdown: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};
