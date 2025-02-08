"use client";

import { useContext } from "react";
import { useEffect, useRef } from "react";

import GeneralContext from "@/lib/contexts/generalContext/GeneralContext";
import RegisterButton from "./Registration/RegisterButton";
import Image from "next/image";
import RegistrationCards from "./Registration/RegistrationCards";
import HeaderLink from "./HeaderLink";
import SecondaryHeader from "./SecondaryHeader";

const Header = () => {
  const context = useContext(GeneralContext);
  const isOpen = context?.isRegistrationOpen;
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line
    const handler = (e: any) => {
      if (!headerRef.current?.contains(e.target)) {
        context!.setIsRegistrationOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen, context]);

  return (
    <nav
      className="flex flex-col w-full sticky top-0 z-50 will-change-transform"
      ref={headerRef}
      id="header"
    >
      <SecondaryHeader />
      <div className="flex w-full h-28 px-12 z-50 py-2 justify-between items-center bg-slate-100 relative">
        <HeaderLink targetId="hero">
          <Image width={480} height={80} src="/logo-ipf.png" alt="logo" />
        </HeaderLink>
        <ul className="flex w-full space-x-[6%] justify-center">
          <HeaderLink targetId="treatment" text="Nasza oferta" />
          <HeaderLink targetId="why-us" text="Dlaczego IPF?" />
          <HeaderLink targetId="team" text="Nasz zespół" />
          <HeaderLink targetId="cooperations" text="Współprace" />
        </ul>
        <RegisterButton
          modalState={context!.isRegistrationOpen}
          modalStateSetter={context!.setIsRegistrationOpen}
        />
      </div>
      <RegistrationCards modalState={context!.isRegistrationOpen} />
    </nav>
  );
};

export default Header;
