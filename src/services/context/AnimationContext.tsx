import { PropsWithChildren, SetStateAction, createContext, useState } from "react";

type SettingFunction = React.Dispatch<SetStateAction<boolean>>;

interface IAnimationContext {
  isTransitionActive: boolean;
  setIsTransitionActive: SettingFunction;
  isOrdered: boolean;
  setIsOrdered: SettingFunction;
  isFormActive: boolean;
  setIsFormActive: SettingFunction;
}

export const AnimationConext = createContext<IAnimationContext | null>(null);

export const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const animation: IAnimationContext = {
    isTransitionActive,
    setIsTransitionActive,
    isOrdered,
    setIsOrdered,
    isFormActive,
    setIsFormActive
  };
  return <AnimationConext.Provider value={animation}>{children}</AnimationConext.Provider>;
};
