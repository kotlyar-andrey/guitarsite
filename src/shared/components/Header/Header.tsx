import { MainMenu } from "./MainMenu";
import styles from "./Header.module.scss";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <MainMenu />
      <div></div>
      {/* for user login */}
    </header>
  );
};
