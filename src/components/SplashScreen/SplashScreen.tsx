import styles from "./SplashScreen.module.scss";

const SplashScreen: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Panini Creator</h1>
        <button className={styles.btn}>Begin</button>
      </div>
      <div className={styles.circleContainer}>
        {Array.from({length: 5}, (_, index) => <div className={`${styles.bigCircle} ${styles[`circle-${index + 1}`]}`} key={index}></div>)}
        {Array.from({length: 2}, (_, index) => <div className={`${styles.smCircle} ${styles[`smCircle-${index + 1}`]}`} key={index}></div>)}
      </div>
    </>
  );
};

export default SplashScreen;
