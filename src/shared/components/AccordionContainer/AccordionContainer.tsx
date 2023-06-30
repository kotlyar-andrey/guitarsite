import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./AccordionContainer.module.scss";

type Props = {
  title: string;
  visible: boolean;
  toggleVisible: () => void;
  additionToolbar?: React.ReactNode;
  children: React.ReactNode;
};

export const AccordionContainer: React.FC<Props> = ({
  title,
  visible,
  toggleVisible,
  additionToolbar,
  children,
}) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.titleContainer}>
        <div />
        {visible && <span className={styles.title}>{title}</span>}
        <div className={styles.toolbar}>
          {visible ? (
            <>
              {additionToolbar}
              <div onClick={toggleVisible}>
                <IoEyeOffOutline />
              </div>
            </>
          ) : (
            <>
              <div onClick={toggleVisible}>
                Показать {title.toLowerCase()} <IoEyeOutline />
              </div>
            </>
          )}
        </div>
      </div>
      {visible && <div>{children}</div>}
    </div>
  );
};
