import React, { useCallback, useEffect, useRef } from "react";
import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import type { TextContainerProps } from "./TreatmentsTextContainer";
import useEmblaCarousel from "embla-carousel-react";
import NextButton from "./NextButton";
import PrevButton from "./PreviousButton";
import TreatmentsTextContainer from "./TreatmentsTextContainer";
import { usePrevNextButtons } from "../hooks";

const TWEEN_FACTOR_BASE = 0.3;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: TextContainerProps[];
  options?: EmblaOptionsType;
};

const TreatmentCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  console.log(prevBtnDisabled);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();

          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);

    //eslint-disable-next-line
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla2">
      <div
        className="embla__viewport"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, white 20%, white 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, transparent 0%, white 20%, white 80%, transparent 100%)",
        }}
        ref={emblaRef}
      >
        <div className="embla__container2">
          {slides.map((treatment, index) => {
            return (
              <div className="embla__slide2" key={`${index} treatment`}>
                <TreatmentsTextContainer
                  className="embla__slide__number"
                  header={treatment.header}
                  text={treatment.text}
                  imgSrc={treatment.imgSrc}
                  secondaryText={treatment.secondaryText}
                />
              </div>
            );
          })}
        </div>
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};

export default TreatmentCarousel;
