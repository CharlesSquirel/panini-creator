import { PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';

interface IResetContext {
  isReset: boolean;
  setIsReset: React.Dispatch<SetStateAction<boolean>>;
}

export const ResetContext = createContext<IResetContext>({ isReset: false, setIsReset: () => {} });

export const ResetContextProvider = ({ children }: PropsWithChildren) => {
  const [isReset, setIsReset] = useState(false);
  const customReset = {
    isReset,
    setIsReset,
  };
  return <ResetContext.Provider value={customReset}>{children}</ResetContext.Provider>;
};
