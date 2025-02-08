"use client";

import { createContext, Dispatch } from "react";

type GeneralContextType = {
  headerHeight: number;
  isRegistrationOpen: boolean;
  setIsRegistrationOpen: Dispatch<boolean>;
};

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

export default GeneralContext;
