import { useCallback, useSyncExternalStore } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const subscribe = useCallback((onChange: () => void) => {
    if (!emblaApi) return () => {};
    emblaApi.on("reInit", onChange).on("select", onChange);
    return () => {
      emblaApi.off("reInit", onChange).off("select", onChange);
    };
  }, [emblaApi]);

  const canScrollPrev = useCallback(() => emblaApi?.canScrollPrev() ?? false, [emblaApi]);
  const canScrollNext = useCallback(() => emblaApi?.canScrollNext() ?? false, [emblaApi]);
  const prevBtnDisabled = !useSyncExternalStore(subscribe, canScrollPrev, () => false);
  const nextBtnDisabled = !useSyncExternalStore(subscribe, canScrollNext, () => false);

  const onPrevButtonClick = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNextButtonClick = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
};

export default usePrevNextButtons;
