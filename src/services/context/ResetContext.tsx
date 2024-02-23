import { PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

type StateDispatch = React.Dispatch<SetStateAction<boolean>>;

interface IResetContext {
  isReset: boolean;
  isRandomized: boolean;
  setIsReset: StateDispatch;
  setIsRandomized: StateDispatch;
}

export const ResetContext = createContext<IResetContext>({
  isReset: false,
  isRandomized: false,
  setIsReset: () => {},
  setIsRandomized: () => {},
});

export const ResetContextProvider = ({ children }: PropsWithChildren) => {
  const [isReset, setIsReset] = useState(false);
  const [isRandomized, setIsRandomized] = useState(false);
  const customReset = {
    isReset,
    setIsReset,
    isRandomized,
    setIsRandomized,
  };
  return <ResetContext.Provider value={customReset}>{children}</ResetContext.Provider>;
};
