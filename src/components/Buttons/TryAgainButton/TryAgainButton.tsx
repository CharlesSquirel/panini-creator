import { useFormContext } from 'react-hook-form';
import style from './TryAgain.module.scss';
import { initialValues } from '@/services/initialValues';
import { useContext } from 'react';
import { ResetContext } from '@/services/context/ResetContext';

const TryAgainButton = () => {
  const { reset } = useFormContext();
  const { setIsReset } = useContext(ResetContext);

  const handleOnClick = () => {
    reset();
    setIsReset(true);
    setTimeout(() => {
      setIsReset(false);
    }, 1000);
  };
  return (
    <button className={style.btn} type="button" onClick={handleOnClick}>
      Start Again
    </button>
  );
};

export default TryAgainButton;
