import { SetStateAction } from 'react';
import styles from './SplashScreen.module.scss';
import { motion } from 'framer-motion';

interface ISplashScreen {
  title: string;
  buttonText: string;
  isTransitionActive: boolean;
  setIsTransitionActive: React.Dispatch<SetStateAction<boolean>>;
  isOrdered: boolean;
  setIsOrdered: React.Dispatch<SetStateAction<boolean>>;
  isFormActive: boolean;
  setIsFormActive: React.Dispatch<SetStateAction<boolean>>;
}

const SplashScreen = ({
  title,
  buttonText,
  isTransitionActive,
  setIsTransitionActive,
  isOrdered,
  setIsOrdered,
  isFormActive,
  setIsFormActive,
}: ISplashScreen) => {
  const handleOnClick = () => {
    setIsTransitionActive(!isTransitionActive)
    setTimeout(() => {

      if (buttonText === 'Begin') {
        setIsFormActive(!isFormActive);
      } else {
        setIsOrdered(!isOrdered);
        setIsFormActive(!isFormActive);
      }
    }, 5000)
  };
  return (
    <>
      <motion.div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.btn} onClick={handleOnClick}>
          {buttonText}
        </button>
      </motion.div>
      <div className={styles.circleContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <div className={`${styles.bigCircle} ${styles[`circle-${index + 1}`]}`} key={index}></div>
        ))}
        {Array.from({ length: 2 }, (_, index) => (
          <motion.div 
          initial={{scale: 1}}
          animate={{ scale: isTransitionActive? 0.5 : 1}}
          exit={{scale: 0.5}}
          transition={{duration: 5}}
          className={`${styles.smCircle} ${styles[`smCircle-${index + 1}`]}`} key={index}></motion.div>
        ))}
      </div>
    </>
  );
};

export default SplashScreen;
