import globalStyle from "@/GlobalClasses.module.scss";
import { initialValues } from "@/services/initialValues";
import { SandwichPayload } from "@/services/types";
import { PropsWithChildren } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaType, validationSchema } from "@/services/validationSchema";

const FormComponentProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<SandwichPayload>({ defaultValues: initialValues, resolver: zodResolver(validationSchema)} );

  const onSubmit: SubmitHandler<SandwichPayload> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={globalStyle.formContainer}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormComponentProvider;
