import globalStyle from '@/GlobalClasses.module.scss';
import { initialValues } from '@/services/initialValues';
import { SandwichPayload } from '@/services/types';
import { SetStateAction } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import styles from './FormComponentProvider.module.scss';

interface IFormComponentProvider {
  children: React.ReactNode;
  isTransitionActive: boolean;
  setIsTransitionActive: React.Dispatch<SetStateAction<boolean>>;
}

const FormComponentProvider = ({ children, isTransitionActive, setIsTransitionActive }: IFormComponentProvider) => {
  const methods = useForm<SandwichPayload>({ defaultValues: initialValues });

  const onSubmit: SubmitHandler<SandwichPayload> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={`${globalStyle.formContainer} ${isTransitionActive ? styles.animateStartForm: ""}`}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormComponentProvider;
