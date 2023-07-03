import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MainMenu.module.scss";

export const MainMenu: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className={styles.navigation}>
      <Link
        href={"/"}
        className={
          pathname === "/" || pathname.startsWith("/lessons")
            ? styles.active
            : ""
        }
      >
        Уроки
      </Link>
      <Link
        href={"/howtoplays"}
        className={pathname.startsWith("/howtoplays") ? styles.active : ""}
      >
        Разборы
      </Link>
      <Link
        href={"/chords"}
        className={pathname.startsWith("/chords") ? styles.active : ""}
      >
        Аккорды
      </Link>
    </nav>
  );
};
