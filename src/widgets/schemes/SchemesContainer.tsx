import { Scheme } from "~/entities/schemes";
import { CustomizedScheme } from "./CustomizedScheme";
import styles from "./SchemesContainer.module.scss";

interface Props {
  schemes: Scheme[];
}

export const SchemesContainer: React.FC<Props> = ({ schemes }) => {
  return (
    <div className={styles.container}>
      {schemes.map((scheme) => (
        <CustomizedScheme key={scheme.pk} scheme={scheme} />
      ))}
    </div>
  );
};
