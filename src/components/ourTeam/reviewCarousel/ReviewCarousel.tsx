"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import type { RatingData } from "../PhotoTextContainer";
import Review from "./Review";

export default function ReviewCarousel({ reviews }: { reviews: RatingData[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (!emblaApi) return;
    const updateHeight = () => {
      const slide = emblaApi.slideNodes()[emblaApi.selectedScrollSnap()];
      const content = slide?.firstElementChild;
      if (content) setHeight(content.getBoundingClientRect().height);
    };
    const observer = new ResizeObserver(updateHeight);
    emblaApi.slideNodes().forEach((slide) => {
      if (slide.firstElementChild) observer.observe(slide.firstElementChild);
    });
    emblaApi.on("select", updateHeight).on("reInit", updateHeight);
    updateHeight();
    return () => {
      observer.disconnect();
      emblaApi.off("select", updateHeight).off("reInit", updateHeight);
    };
  }, [emblaApi]);
  return (
    <div className="min-w-0">
      <div ref={emblaRef} className="overflow-hidden" style={{ height }}>
        <div className="flex items-start">{reviews.map((review, index) => <div key={review.name + "-" + index} className="min-w-0 flex-[0_0_100%]"><Review {...review} /></div>)}</div>
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <button type="button" aria-label="Poprzednia opinia" className="review-button" onClick={() => emblaApi?.scrollPrev()}><ArrowBackRoundedIcon fontSize="small" /></button>
        <button type="button" aria-label="Następna opinia" className="review-button" onClick={() => emblaApi?.scrollNext()}><ArrowForwardRoundedIcon fontSize="small" /></button>
      </div>
    </div>
  );
}
