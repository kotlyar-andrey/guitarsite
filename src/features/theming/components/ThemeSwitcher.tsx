import { useTheme } from "next-themes";
import { BiColorFill } from "react-icons/bi";
import { Loading } from "~/shared/components/Loading";
import { useMounted } from "~/shared/hooks/mounted";
import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) {
    return <Loading />;
  }

  return (
    <div className={styles.theme_switcher}>
      <label htmlFor="theme_select">
        <BiColorFill />
      </label>
      <select
        id="theme_select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="dark">Темная</option>
        <option value="light">Светлая</option>
      </select>
    </div>
  );
};
