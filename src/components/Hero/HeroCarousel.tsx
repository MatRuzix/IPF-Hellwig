import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const HeroCarousel = () => {
  const options: EmblaOptionsType = {};
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 5000 })]);

  return (
    <div
      className="embla mx-auto w-full h-full border normalScreen:visible hamburger:visible mobile:visible mobile-xs:hidden"
      ref={emblaRef}
    >
      <div className="embla__container h-full">
        <div className="embla__slide flex items_center justify-center">
          <Image
            className=""
            src="/hero_img_1.jpg"
            alt="slide_1"
            width="1600"
            height="1000"
          />
        </div>
        <div className="embla__slide flex items_center justify-center">
          <Image
            className=""
            src="/hero_img_2.jpg"
            alt="slide_2"
            width="1600"
            height="1000"
          />
        </div>
        <div className="embla__slide flex items_center justify-center">
          <Image
            className=""
            src="/hero_img_3.jpg"
            alt="slide_3"
            width="1600"
            height="1000"
          />
        </div>
        <div className="embla__slide flex items_center justify-center">
          <Image
            className=""
            src="/hero_img_4.jpg"
            alt="slide_4"
            width="1600"
            height="1000"
          />
        </div>
        <div className="embla__slide flex items_center justify-center">
          <Image
            className=""
            src="/hero_img_5.jpg"
            alt="slide_5"
            width="1600"
            height="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
