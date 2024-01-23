import { PropsWithChildren } from 'react';
import style from "./ArrowButton.module.scss"

const ArrowButton = ({children}:PropsWithChildren) => {
  return (
    <button className={style.btn} type='button'>
        {children}
    </button>
  )
}

export default ArrowButton