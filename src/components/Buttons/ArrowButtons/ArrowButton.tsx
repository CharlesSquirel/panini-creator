import style from "./ArrowButton.module.scss"
import { ArrowButtonProps } from '@/services/types';

const ArrowButton = ({children, onClick}:ArrowButtonProps) => {
  return (
    <button className={style.btn} type='button' onClick={onClick}>
        {children}
    </button>
  )
}

export default ArrowButton