import { Header } from "../Header";
import styles from "./MainLayout.module.scss";

interface Props {
  children: React.ReactNode;
}
export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <aside></aside>
        <section className={styles.content}>{children}</section>
        <aside></aside>
      </main>
    </>
  );
};
