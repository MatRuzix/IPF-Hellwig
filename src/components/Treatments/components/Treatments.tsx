import { EmblaOptionsType } from "embla-carousel";
import type { TextContainerProps } from "./TreatmentsTextContainer";
import TreatmentCarousel from "./TreatmentCarousel";
import offer from "@/lib/data/offer";

const Treatments = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES: TextContainerProps[] = offer;
  return (
    <div
      className="flex flex-col justify-around items-center text-6xl w-full h-[calc(100vh-144px)] bg-slate-800 pb-[4%]"
      id="treatment"
    >
      <div className="text-znanylekarz text-6xl my-[4%]">Nasza oferta</div>
      <div className="flex w-full h-full justify-center items-center">
        <TreatmentCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Treatments;
