"use client";

import { useContext } from "react";

import clsx from "clsx";

import Button from "@/components/button/Button";
import GeneralContext from "@/lib/contexts/generalContext/GeneralContext";

const RegistrationModal = () => {
  const context = useContext(GeneralContext);
  const isOpen = context?.isRegistrationOpen;

  return (
    <div
      className={clsx(
        "w-full h-full flex absolute justify-center items-center",
        { hidden: !isOpen }
      )}
    >
      <div className="absolute w-full h-full z-[100] bg-slate-800/70" />
      <div className="absolute w-1/3 h-1/2 flex flex-col z-[110] bg-white rounded-lg justify-center items-center">
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default RegistrationModal;
