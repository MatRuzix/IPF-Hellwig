"use client";

import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

type RegisterButtonProps = {
  isRegistrationOpen: boolean;
  setIsRegistrationOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export default function RegisterButton({ isRegistrationOpen, setIsRegistrationOpen, className }: RegisterButtonProps) {
  return (
    <button type="button" aria-haspopup="dialog" aria-expanded={isRegistrationOpen} onClick={() => setIsRegistrationOpen((previous) => !previous)} className={clsx("button-primary whitespace-nowrap", className)}>Umów wizytę</button>
  );
}
