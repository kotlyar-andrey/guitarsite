import Image from "next/image";
import { Scheme } from "../model/interfaces";
import styles from "./SchemeView.module.scss";

interface Props {
  scheme: Scheme;
  width: number;
  height: number;
}

export const SchemeView: React.FC<Props> = ({ scheme, width, height }) => {
  return (
    <div className={styles.scheme}>
      <p className={styles.title}>{scheme.inscription}</p>
      <Image
        src={scheme.image}
        alt={scheme.inscription}
        height={height}
        width={width}
      />
    </div>
  );
};
