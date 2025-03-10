import { EmblaOptionsType } from "embla-carousel";
import type { TextContainerProps } from "./TreatmentsTextContainer";
import TreatmentCarousel from "./TreatmentCarousel";
import offer from "@/lib/data/offer";

const Treatments = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES: TextContainerProps[] = offer;
  return (
    <div
      className="flex flex-col justify-around items-center  normalScreen:text-6xl hamburger:text-5xl mobile:text-4xl mobile-xs:text-3xl w-full h-[calc(100vh-144px)] mobile:h-[calc(100vh-84px)] mobile-xs:h-[calc(100vh-84px)] bg-slate-800 pb-[4%]"
      id="treatment"
    >
      <div className="text-chillGreenrz my-[4%]">Nasza oferta</div>
      <div className="flex w-full normalScreen:h-full hamburger:h-full mobile:h-[80%] mobile-xs:h-[60%] justify-center items-center">
        <TreatmentCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Treatments;
