import { SetStateAction } from "react";
import styles from "./SplashScreen.module.scss";
import { motion } from "framer-motion";

interface ISplashScreen {
  title: string;
  buttonText: string;
  isTransitionActive: boolean;
  setIsTransitionActive: React.Dispatch<SetStateAction<boolean>>;
}

const SplashScreen = ({
  title,
  buttonText,
  isTransitionActive,
  setIsTransitionActive,
}: ISplashScreen) => {
  return (
    <motion.div initial={{ opacity: 1 }} transition={{ duration: 5 }}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.btn}>{buttonText}</button>
      </div>
      <div className={styles.circleContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <div className={`${styles.bigCircle} ${styles[`circle-${index + 1}`]}`} key={index}></div>
        ))}
        {Array.from({ length: 2 }, (_, index) => (
          <div
            className={`${styles.smCircle} ${styles[`smCircle-${index + 1}`]}`}
            key={index}
          ></div>
        ))}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
