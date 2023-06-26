import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./AccordionContainer.module.scss";

type Props = {
  title: string;
  visible: boolean;
  toggleVisible: () => void;
  children: React.ReactNode;
};

export const AccordionContainer: React.FC<Props> = ({
  title,
  visible,
  toggleVisible,
  children,
}) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.titleContainer}>
        <span />
        {visible && <span className={styles.title}>{title}</span>}
        <span onClick={toggleVisible} className={styles.toolbar}>
          {visible ? (
            <span>
              <IoEyeOffOutline />
            </span>
          ) : (
            <>
              <span>Показать {title.toLowerCase()} </span>
              <IoEyeOutline />
            </>
          )}
        </span>
      </div>
      {visible && <div>{children}</div>}
    </div>
  );
};
