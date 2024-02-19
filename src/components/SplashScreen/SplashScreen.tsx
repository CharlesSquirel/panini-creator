import { SetStateAction } from 'react';
import styles from './SplashScreen.module.scss';
import { motion } from 'framer-motion';

interface ISplashScreen {
  isOrdered: boolean;
  isTransitionActive: boolean;
  setIsTransitionActive: React.Dispatch<SetStateAction<boolean>>;
  setIsOrdered: React.Dispatch<SetStateAction<boolean>>;
  type: 'start' | 'end';
}

const SplashScreen = ({ isOrdered, isTransitionActive, setIsTransitionActive, setIsOrdered, type }: ISplashScreen) => {
  const handleOnClick = () => {
    setIsTransitionActive(true);
    if (type === 'end') {
      setIsOrdered(!isOrdered);
    }
  };

  return (
    <div className={`${styles.mainContainer} ${isTransitionActive && styles.animateMain}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>{type === 'start' ? 'Panini Creator' : 'Panini Ordered'}</h1>
        <button className={styles.btn} onClick={handleOnClick}>
          {type === 'start' ? 'Begin' : 'Start Again'}
        </button>
      </div>
      <div className={styles.circleContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <div
            className={`${styles.bigCircle} ${styles[`circle-${index + 1}`]} ${isTransitionActive && styles[`animate-${index + 1}`]}`}
            key={index}
          ></div>
        ))}
        {/* <motion.div
          transition={{ duration: 4 }}
          animate={{ translateX: isTransitionActive ? -500 : 0 }}
          className={`${styles.bigCircle} ${styles.circle1}`}
        ></motion.div> */}
        {/* <motion.div transition={{ duration: 4 }} className={`${styles.bigCircle} ${styles.circle2}`}></motion.div>
        <motion.div transition={{ duration: 4 }} className={`${styles.bigCircle} ${styles.circle3}`}></motion.div>
        <motion.div transition={{ duration: 4 }} className={`${styles.bigCircle} ${styles.circle4}`}></motion.div>
        <motion.div transition={{ duration: 4 }} className={`${styles.bigCircle} ${styles.circle5}`}></motion.div> */}
        {Array.from({ length: 2 }, (_, index) => (
          <div className={`${styles.smCircle} ${styles[`smCircle-${index + 1}`]}`} key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
