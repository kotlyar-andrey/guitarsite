import { ThemeSwitcher } from "~/features/theming/components/ThemeSwitcher";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <span>youtube, mobileapp</span>
      <span></span>
      <ThemeSwitcher />
    </div>
  );
};
