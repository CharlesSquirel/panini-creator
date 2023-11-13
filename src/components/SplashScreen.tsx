import React from "react";
import styles from "./SplashScreen.module.scss";

const SplashScreen: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Panini Creator</h1>
        <button className={styles.btn}>Begin</button>
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.bigCircle}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default SplashScreen;
