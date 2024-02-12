import styles from "./SplashScreen.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ISplashScreen {
  title: string;
  buttonText: string;
}

const SplashScreen = ({ title, buttonText }: ISplashScreen) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <a className={styles.btn}>
          <Link to={"form"}>{buttonText}</Link>
        </a>
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
