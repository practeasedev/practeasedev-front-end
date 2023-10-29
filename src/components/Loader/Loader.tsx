import { FC } from "react";
import styles from "@/components/Loader/Loader.module.css";

interface ILoaderProps {
  loadingText?: string;
}

const Loader: FC<ILoaderProps> = ({ loadingText }) => {
  return (
    <div className={styles["loader-backdrop"]}>
      <div className={styles.loader}>
        <p className={styles.spinner} />
        {loadingText ? <p>{loadingText}</p> : null}
      </div>
    </div>
  );
};

export default Loader;
