import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Review from "./Review";
import type { RatingData } from "../PhotoTextContainer";

type PropType = {
  slides: RatingData[];
  options?: EmblaOptionsType;
};

const ReviewCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.6 }),
  ]);

  return (
    <div className="embla3">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container2">
          {slides.map((slide, index) => (
            <div className="embla__slide2" key={index}>
              <Review
                name={slide.name}
                rating={slide.rating}
                className="embla__slide__number"
                review={slide.review}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
