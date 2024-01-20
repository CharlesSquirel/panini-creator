import React, { PropsWithChildren } from "react";

const FormProvider: React.FC = ({children}:PropsWithChildren) => {
  return <form>
    {children}
  </form>
};

export default FormProvider;
