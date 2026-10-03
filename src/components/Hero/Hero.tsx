"use client";

import { useContext } from "react";
import GeneralContext from "@/lib/contexts/generalContext/GeneralContext";
import RegisterButton from "@/components/header/Registration/RegisterButton";
import DirectionsButton from "@/components/header/DirectionsButton";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const context = useContext(GeneralContext);
  return (
    <section id="hero" className="bg-slate-800 text-white">
      <div className="site-container grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-20">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-teal-300">IPF Hellwig · Malbork</p>
          <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.15] tracking-tight">Fizjoterapia i rehabilitacja <span className="text-teal-300">w Malborku</span></h1>
          <p className="mt-6 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">W IPF Hellwig profesjonalizm spotyka się z pasją do zdrowia. Poznaj nasz zespół i wybierz opiekę dopasowaną do Twoich potrzeb.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {context && <RegisterButton isRegistrationOpen={context.isRegistrationOpen} setIsRegistrationOpen={context.setIsRegistrationOpen} className="px-3 text-xs sm:px-6 sm:text-sm" />}
            <DirectionsButton className="px-3 text-xs sm:px-5 sm:text-sm" />
          </div>
        </div>
        <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl sm:aspect-[3/2] lg:aspect-[5/4]"><HeroCarousel /></div>
      </div>
    </section>
  );
}
