import { ReactNode } from "react"
import style from "./FormContainer.module.scss"

interface IFormContainer {
  title: string;
  children: ReactNode;
}

const FormContainer = ({title, children}: IFormContainer) => {
  return (
    <section className={style.container}>
        <h2 className={style.title}>{title}</h2>
        {children}
    </section>
  )
}

export default FormContainer