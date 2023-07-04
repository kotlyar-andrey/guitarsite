import { ThemeSwitcher } from "~/features/theming/components/ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import { BiLogoYoutube, BiLogoVk, BiLogoTelegram } from "react-icons/bi";
import styles from "./Footer.module.scss";
import googlePlay from "~/shared/assets/images/googleplay.png";
import {
  GOOGLE_PLAY_APP,
  LINK_TELEGRAM,
  LINK_VK,
  LINK_YOUTUBE,
} from "~/shared/config/consts";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.foreign_links}>
        <Link href={GOOGLE_PLAY_APP} target="_blank">
          <Image
            src={googlePlay}
            height={53}
            alt="Скачать мобильное приложение"
          />
        </Link>
        <div className={styles.socials}>
          <Link href={LINK_YOUTUBE} target="_blank">
            <BiLogoYoutube style={{ color: "#CD201F" }} />
          </Link>
          <Link href={LINK_VK} target="_blank">
            <BiLogoVk style={{ color: "#4C75A3" }} />
          </Link>
          <Link href={LINK_TELEGRAM} target="_blank">
            <BiLogoTelegram style={{ color: "#0088cc" }} />
          </Link>
        </div>
      </div>

      <ThemeSwitcher />
    </div>
  );
};
