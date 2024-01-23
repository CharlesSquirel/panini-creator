import { CSSProperties, ReactNode } from "react";
import styles from "./FormContainer.module.scss";

interface IFormContainer {
  title: string;
  children: ReactNode;
  isLast?: boolean;
}

const FormContainer = ({ title, children, isLast }: IFormContainer) => {
  return (
    <section className={`${styles.container} ${isLast && styles.isLast}`}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default FormContainer;
