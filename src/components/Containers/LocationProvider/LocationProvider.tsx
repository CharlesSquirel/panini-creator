import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

const LocationProvider = ({ children }: PropsWithChildren) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default LocationProvider;
