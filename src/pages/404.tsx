import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "~/shared/components/MainLayout";
import { ADMIN_EMAIL } from "~/shared/config/consts";
import errorImage from "~/shared/assets/images/404.png";

const Error404: React.FC = () => {
  return (
    <MainLayout>
      <p>
        Такой страницы не существует. Вернитесь <Link href="/">на главную</Link>{" "}
        или <Link href={`mailto:${ADMIN_EMAIL}`}>напишите нам</Link>, если
        возникли проблемы.
      </p>
      <div>
        <Image
          src={errorImage}
          width={600}
          height={600}
          alt="Ошибка 404"
          style={{ display: "block", margin: "0 auto" }}
        />
      </div>
    </MainLayout>
  );
};

export default Error404;
