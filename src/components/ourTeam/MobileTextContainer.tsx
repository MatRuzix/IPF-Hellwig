"use client";

import Image from "next/image";

import ReviewCarousel from "./reviewCarousel/ReviewCarousel";
import type { EmblaOptionsType } from "embla-carousel";

export type RatingData = {
  rating: number;
  name: string;
  review: string;
};

export type PhotoTextContainerProps = {
  imgSrc: string;
  name: string;
  paragraph1: string;
  paragraph2?: string;
  reviews: RatingData[];
};

const MobileTextContainer: React.FC<PhotoTextContainerProps> = ({
  imgSrc,
  name,
  paragraph1,
  paragraph2,
  reviews,
}) => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="flex flex-col items-center relative w-full h-1/2 mt-20 ">
      <div className="relative w-[60vw] h-[calc(96vw)]">
        <Image src={imgSrc} alt="pers_phot" fill />
        <div className="absolute w-full h-full scale-y-105 bg-gradient-to-b from-transparent from-[75%] to-[82%] to-slate-100 z-[11] pointer-events-none" />
      </div>

      <div className="flex flex-col space-y-4 h-full w-full overflow-hidden">
        <p className="text-xl mt-2 mb-2">{name}</p>
        <div className="w-[140%]">
          <ReviewCarousel slides={reviews} options={OPTIONS} />
        </div>

        <p className="text-sm">{paragraph1}</p>
        <p className="text-sm">{paragraph2}</p>
      </div>
    </div>
  );
};

export default MobileTextContainer;
