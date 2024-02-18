import styles from "./SplashScreen.module.scss";
import { Link, redirect, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AnimationContext } from "@/services/context/AnimationProvider";

interface ISplashScreen {
  title: string;
  buttonText: string;
}

const SplashScreen = ({ title, buttonText }: ISplashScreen) => {
  const animationContext = useContext(AnimationContext);

  if (!animationContext) {
    throw new Error("There is no animation context");
  }

  const { isTransition, setIsTransition } = animationContext;

  const navigation = useNavigate();

  const handleClick = () => {
    setIsTransition(true);
    setTimeout(() => {
      navigation("/form");
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <a className={styles.btn} onClick={handleClick}>
          {buttonText}
        </a>
      </div>
      <div className={styles.circleContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <div className={`${styles.bigCircle} ${styles[`circle-${index + 1}`]}`} key={index}></div>
        ))}
        {Array.from({ length: 2 }, (_, index) => (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isTransition ? 0.5 : 1, opacity: isTransition ? 0 : 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 5 }}
            className={`${styles.smCircle} ${styles[`smCircle-${index + 1}`]}`}
            key={index}
          ></motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
