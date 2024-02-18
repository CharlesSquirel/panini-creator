import { PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface IAnimationContext {
  isTransition: boolean;
  setIsTransition: React.Dispatch<SetStateAction<boolean>>;
}

export const AnimationContext = createContext<IAnimationContext | null>(null);

export const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [isTransition, setIsTransition] = useState(false);

  const animationContextValue: IAnimationContext = {
    isTransition,
    setIsTransition,
  };
  return (
    <AnimationContext.Provider value={animationContextValue}>{children}</AnimationContext.Provider>
  );
};
