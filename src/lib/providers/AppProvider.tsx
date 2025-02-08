"use client";

import { useState } from "react";
import { SnackbarProvider } from "notistack";

import GeneralContext from "../contexts/generalContext/GeneralContext";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [isRegistrationCardOpen, setIsRegistrationCardOpen] =
    useState<boolean>(false);
  const context = {
    headerHeight: 144,
    isRegistrationOpen: isRegistrationCardOpen,
    setIsRegistrationOpen: setIsRegistrationCardOpen,
  };

  return (
    <SnackbarProvider>
      <GeneralContext.Provider value={context}>
        {children}
      </GeneralContext.Provider>
    </SnackbarProvider>
  );
};

export default AppProvider;
