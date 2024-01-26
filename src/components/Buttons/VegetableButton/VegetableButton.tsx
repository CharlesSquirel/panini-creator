import { SetStateAction, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import style from './VegetableButton.module.scss';

interface VegetablesProps {
  children: React.ReactNode;
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>
}

const VegetableButton = ({ children, count, setCount }: VegetablesProps) => {
  const { register, setValue } = useFormContext();
  const [isClicked, setIsClicked] = useState(false);

  const registerVegetable = (value: string) => {
    setValue(`vegetables.${count}`, value)
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    isClicked ? setCount(count-1) : setCount(count + 1)
    setIsClicked(!isClicked);
    const registerValue = e.currentTarget.textContent;
    if (registerValue) {
      registerVegetable(registerValue);
    }
  };

  return (
    <button type="button" className={`${style.vegBtn} ${isClicked ? style.clickedBtn : ''}`} onClick={(e) => handleOnClick(e)} {...register(`vegetables.${count}`)}>
      {children}
    </button>
  );
};

export default VegetableButton;
