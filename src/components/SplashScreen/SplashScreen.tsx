import styles from "./SplashScreen.module.scss";

interface ISplashScreen {
  title: string;
  buttonText: string;
  ref: React.RefObject<HTMLDivElement>
}

const SplashScreen = ({ title, buttonText, ref }: ISplashScreen) => {
  return (
    <>
      <div className={styles.container} ref={ref}>
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
    </>
  );
};

export default SplashScreen;
