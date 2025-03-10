"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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

const PhotoTextContainer: React.FC<PhotoTextContainerProps> = ({
  imgSrc,
  name,
  paragraph1,
  paragraph2,
  reviews,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const OPTIONS: EmblaOptionsType = { loop: true };
  console.log(window.innerHeight);

  return (
    <div
      className="flex items-center relative overflow-hidden h-[calc(100vh-144px)] w-[calc((100vh-144px)*0.88)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imgSrc} alt="pers_phot" fill />

      <motion.div
        className="w-full h-full bg-slate-100 opacity-45 absolute z-20"
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent from-[75%] to-[82%] to-slate-100 z-[11] pointer-events-none" />
      <motion.div
        className="absolute w-full h-full z-30 text-sm flex flex-col px-6 space-y-3 item-center justify-center font-extrabold"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <ReviewCarousel slides={reviews} options={OPTIONS} />
        <div className="flex flex-col space-y-3 h-full overflow-auto pt-5">
          <p className="text-2xl mb-2">{name}</p>
          <div className="flex h-1/2 flex-col justify-around">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhotoTextContainer;
