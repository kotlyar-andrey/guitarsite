import { useTheme } from "next-themes";
import { Loading } from "~/shared/components/Loading";
import { useMounted } from "~/shared/hooks/mounted";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) {
    return <Loading />;
  }

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="dark">Темная</option>
      <option value="light">Светлая</option>
    </select>
  );
};
