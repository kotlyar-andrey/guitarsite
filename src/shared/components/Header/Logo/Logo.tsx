import Image from "next/image";
import styles from "./Logo.module.scss";
import logoImage from "~/shared/assets/images/logo.png";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Image src={logoImage} height={48} alt="Logo" />
      <Link href="/">Гитара с нуля</Link>
    </div>
  );
};
