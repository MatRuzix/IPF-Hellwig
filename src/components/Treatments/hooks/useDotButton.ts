import { useCallback, useSyncExternalStore } from "react";
import type { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const emptyScrollSnaps: number[] = [];

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const subscribe = useCallback((onChange: () => void) => {
    if (!emblaApi) return () => {};
    emblaApi.on("reInit", onChange).on("select", onChange);
    return () => {
      emblaApi.off("reInit", onChange).off("select", onChange);
    };
  }, [emblaApi]);

  const getSelectedIndex = useCallback(() => emblaApi?.selectedScrollSnap() ?? 0, [emblaApi]);
  const getScrollSnaps = useCallback(() => emblaApi?.scrollSnapList() ?? emptyScrollSnaps, [emblaApi]);
  const selectedIndex = useSyncExternalStore(subscribe, getSelectedIndex, () => 0);
  const scrollSnaps = useSyncExternalStore(subscribe, getScrollSnaps, () => emptyScrollSnaps);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      onButtonClick?.(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export default useDotButton;
