"use client";

import HeroLogo from "./HeroLogo";
import HeroCarousel from "./HeroCarousel";
import Button from "../button/Button";

import HeaderLink from "../header/HeaderLink";

const Hero = () => {
  return (
    <div
      className="flex w-full h-[calc(100vh-144px)] mobile:h-[calc(100vh-84px)] mobile-xs:h-[calc(100vh-84px)] relative overflow-hidden"
      id="hero"
    >
      <div className="absolute w-full h-full bg-slate-800 opacity-40 z-[9]" />
      <div className="absolute w-full h-full bg-gradient-to-t from-slate-800 from-0% to-10% to-transparent z-[11]" />
      <div className="absolute w-full h-full  bg-gradient-to-r from-slate-800 from-50% to-100% to-transparent z-10" />
      <HeroLogo />
      <div className="w-full h-full absolute -right-[25%]">
        <HeroCarousel />
      </div>
      <div className="absolute z-20 flex flex-col justify-center space-y-24 hamburger:space-y-12  items-center text-white h-full w-1/2">
        <div className="mx-6 normalScreen:text-6xl hamburger:text-5xl mobile:text-2xl mobile-xs:text-xl">
          Gdzie profesjonalizm <br /> spotyka się <br /> z pasją do{" "}
          <span className="text-znanylekarz">ZDROWIA!</span>
        </div>
        <HeaderLink targetId="why-us" className="w-1/3">
          <Button name="DOWIEDZ SIĘ WIĘCEJ" variant="transparent" />
        </HeaderLink>
      </div>
    </div>
  );
};

export default Hero;
