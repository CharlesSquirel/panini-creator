import globalStyle from '@/GlobalClasses.module.scss';
import { initialValues } from '@/services/initialValues';
import { SandwichPayload } from '@/services/types';
import {SetStateAction } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface IFormComponentProvider {
  children: React.ReactNode;
  isOrdered: boolean;
  setIsOrdered: React.Dispatch<SetStateAction<boolean>>;
  isFormActive: boolean;
  setIsFormActive: React.Dispatch<SetStateAction<boolean>>;
}

const FormComponentProvider = ({ children, isOrdered, setIsOrdered, isFormActive, setIsFormActive }: IFormComponentProvider) => {
  const methods = useForm<SandwichPayload>({ defaultValues: initialValues });

  const onSubmit: SubmitHandler<SandwichPayload> = (data) => {
    console.log(data);
    setIsFormActive(!isFormActive)
    setIsOrdered(!isOrdered)
  };

  return (
    <FormProvider {...methods}>
      <motion.form onSubmit={methods.handleSubmit(onSubmit)} className={globalStyle.formContainer}>
        {children}
      </motion.form>
    </FormProvider>
  );
};

export default FormComponentProvider;
