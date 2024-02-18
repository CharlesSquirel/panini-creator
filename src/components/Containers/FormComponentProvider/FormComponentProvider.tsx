import globalStyle from "@/GlobalClasses.module.scss";
import { initialValues } from "@/services/initialValues";
import { SandwichPayload } from "@/services/types";
import { PropsWithChildren, useContext } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AnimationContext } from "@/services/context/AnimationProvider";

const FormComponentProvider = ({ children }: PropsWithChildren) => {
  const animationContext = useContext(AnimationContext);

  if (!animationContext) {
    throw new Error("There is no animation context");
  }

  const { isTransition, setIsTransition } = animationContext;

  const methods = useForm<SandwichPayload>();

  const onSubmit: SubmitHandler<SandwichPayload> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransition ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        onSubmit={methods.handleSubmit(onSubmit)}
        className={globalStyle.formContainer}
      >
        {children}
      </motion.form>
    </FormProvider>
  );
};

export default FormComponentProvider;
