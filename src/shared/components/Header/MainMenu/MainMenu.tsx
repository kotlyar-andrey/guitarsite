import Link from "next/link";
import styles from "./MainMenu.module.scss";

interface Props {
  activeLink: string;
}

export const MainMenu: React.FC<Props> = ({ activeLink }) => {
  return (
    <nav className={styles.navigation}>
      <Link href={"/"} className={activeLink === "/" ? styles.active : ""}>
        Уроки
      </Link>
      <Link href={"/howtoplays"}>Разборы</Link>
      <Link href={"/chords"}>Аккорды</Link>
    </nav>
  );
};
