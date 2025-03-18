"use client";

import { useEffect, useState } from "react";
import type { Ref } from "react";

import clsx from "clsx";

import ZnanyLekarzWidget from "./ZnanyLekarzWidget";

type RegistrationCardsProps = {
  modalState: boolean;
  ref?: Ref<HTMLDivElement>;
};

const RegistrationCards: React.FC<RegistrationCardsProps> = ({
  modalState,
  ref,
}) => {
  const [vw, setVw] = useState<number>(0);

  useEffect(() => {
    setVw(
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )
    );
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "absolute right-0 z-30 flex max-h-[calc(100vh-144px)] overflow-auto transition-all ease-in-out duration-500 delay-200 rounded-b-lg rounded-r-none",
        { "-top-32 opacity-0 pointer-events-none": !modalState },
        { "top-[144px] opacity-100": modalState && vw >= 600 },
        { "top-[84px] opacity-100 grow": modalState && vw < 600 },
        { "flex-col": vw < 600 }
      )}
    >
      <ZnanyLekarzWidget variant="krystian" />
      <ZnanyLekarzWidget variant="marta" />
    </div>
  );
};

export default RegistrationCards;
