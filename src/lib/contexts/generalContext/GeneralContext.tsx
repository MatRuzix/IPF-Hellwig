"use client";

import { createContext, type Dispatch, type SetStateAction } from "react";

type GeneralContextType = {
  headerHeight: number;
  isRegistrationOpen: boolean;
  setIsRegistrationOpen: Dispatch<SetStateAction<boolean>>;
};
const GeneralContext = createContext<GeneralContextType | undefined>(undefined);
export default GeneralContext;
