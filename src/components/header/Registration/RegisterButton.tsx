"use client";

import { Dispatch, useContext, useEffect } from "react";
import Button from "../../button/Button";
import useScrollLock from "@/lib/hooks/useScrollLock";

import GeneralContext from "@/lib/contexts/generalContext/GeneralContext";

type RegisterButtonProps = {
  modalState: boolean;
  modalStateSetter: Dispatch<boolean>;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({
  modalState,
  modalStateSetter,
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const context = useContext(GeneralContext);
  const isOpen = context?.isRegistrationOpen;

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }
    if (!isOpen) {
      unlockScroll();
    }
  }, [isOpen, lockScroll, unlockScroll]);

  return (
    <Button
      className=" bg-chillGreenrz mobile-xs:py-2 mobile-xs:px-2 mobile-xs:w-1/4 mobile-xs:text-xs mobile:text-xs mobile:py-2 mobile:px-2 mobile:w-1/4 hamburger:py-2 hamburger:px-2 hamburger:w-1/4 py-4 px-10 hamburger:text-base text-xl font-extrabold hover:bg-chillGreenrzHover"
      custom={true}
      name="Umów się do nas "
      onClick={() => {
        modalStateSetter(!modalState);
      }}
    />
  );
};

export default RegisterButton;
