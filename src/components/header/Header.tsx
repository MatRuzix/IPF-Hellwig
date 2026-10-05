"use client";

import { useContext } from "react";
import Image from "next/image";
import GeneralContext from "@/lib/contexts/generalContext/GeneralContext";
import { navigation } from "@/lib/site";
import HeaderLink from "./HeaderLink";
import HeaderDrawer from "./HeaderDrawer";
import SecondaryHeader from "./SecondaryHeader";
import RegisterButton from "./Registration/RegisterButton";
import RegistrationCards from "./Registration/RegistrationCards";
import DirectionsButton from "./DirectionsButton";

export default function Header() {
  const context = useContext(GeneralContext);
  if (!context) return null;
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-100">
      <SecondaryHeader />
      <div className="site-container flex flex-wrap items-center justify-between gap-x-2 gap-y-1 py-2 sm:h-[72px] sm:flex-nowrap sm:py-0 md:h-[88px] lg:gap-4">
        <HeaderLink targetId="hero" className="flex shrink-0 items-center">
          <Image src="/logo-ipf.png" alt="IPF Hellwig" width={480} height={73} preload sizes="(max-width: 639px) 150px, 240px" className="h-auto w-[clamp(110px,34vw,160px)] sm:w-52 lg:w-60" />
        </HeaderLink>
        <nav aria-label="Menu główne" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm text-slate-700 xl:gap-7 xl:text-base">
            {navigation.map((item) => <li key={item.targetId}><HeaderLink {...item} /></li>)}
          </ul>
        </nav>
        <div className="contents sm:flex sm:items-center sm:gap-3">
          <div className="order-last grid w-full grid-cols-2 gap-3 sm:order-none sm:flex sm:w-auto">
            <RegisterButton isRegistrationOpen={context.isRegistrationOpen} setIsRegistrationOpen={context.setIsRegistrationOpen} className="px-3 text-xs sm:px-4 sm:text-sm" />
            <DirectionsButton className="px-3 text-xs sm:px-4 sm:text-sm" />
          </div>
          <HeaderDrawer />
        </div>
      </div>
      <RegistrationCards isRegistrationOpen={context.isRegistrationOpen} onClose={() => context.setIsRegistrationOpen(false)} />
    </header>
  );
}
