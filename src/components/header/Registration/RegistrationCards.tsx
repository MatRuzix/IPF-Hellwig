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
  return (
    <div
      ref={ref}
      className={clsx(
        "absolute right-0 z-30 flex max-h-[calc(100vh-144px)] overflow-hidden transition-all ease-in-out duration-500 delay-200 rounded-b-lg rounded-r-none",
        { "-top-32 opacity-0 pointer-events-none": !modalState },
        { "top-[144px] opacity-100": modalState }
      )}
    >
      <ZnanyLekarzWidget variant="krystian" />
      <ZnanyLekarzWidget variant="marta" />
    </div>
  );
};

export default RegistrationCards;
