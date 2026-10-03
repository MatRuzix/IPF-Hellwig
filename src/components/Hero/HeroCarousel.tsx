"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const photos = [
  { src: "/hero_img_2.jpg", alt: "Wnętrze gabinetu IPF Hellwig w Malborku" },
  { src: "/hero_img_3.jpg", alt: "Gabinet fizjoterapii IPF Hellwig" },
  { src: "/hero_img_4.jpg", alt: "Przestrzeń gabinetu IPF Hellwig" },
  { src: "/hero_img_5.jpg", alt: "Wyposażenie gabinetu IPF Hellwig" },
  { src: "/hero_img_1.jpg", alt: "IPF Hellwig — gabinet w Malborku" },
];

export default function HeroCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplay = useMemo(() => Autoplay({
    delay: 3000,
    active: !isPaused,
    stopOnInteraction: false,
    stopOnFocusIn: false,
    breakpoints: { "(prefers-reduced-motion: reduce)": { jump: true } },
  }), [isPaused]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    const updateSelected = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", updateSelected).on("reInit", updateSelected);
    updateSelected();
    return () => {
      emblaApi.off("select", updateSelected).off("reInit", updateSelected);
    };
  }, [emblaApi]);

  const scrollPhoto = (direction: "previous" | "next") => {
    if (direction === "previous") emblaApi?.scrollPrev();
    else emblaApi?.scrollNext();
    autoplay.reset();
  };

  return (
    <div className="relative h-full" role="region" aria-label="Zdjęcia gabinetu">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {photos.map((photo, index) => <div key={photo.src} className="relative h-full min-w-0 flex-[0_0_100%]"><Image src={photo.src} alt={photo.alt} fill priority={index === 0} sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></div>)}
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button type="button" aria-label={isPaused ? "Wznów pokaz zdjęć" : "Zatrzymaj pokaz zdjęć"} className="carousel-button" onClick={() => setIsPaused((paused) => !paused)}>
            {isPaused ? <PlayArrowRoundedIcon fontSize="small" /> : <PauseRoundedIcon fontSize="small" />}
          </button>
          <span className="rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white" aria-label={"Zdjęcie " + (selectedIndex + 1) + " z " + photos.length}>{selectedIndex + 1} / {photos.length}</span>
        </div>
        <div className="flex gap-2">
          <button type="button" aria-label="Poprzednie zdjęcie" className="carousel-button" onClick={() => scrollPhoto("previous")}><ArrowBackRoundedIcon fontSize="small" /></button>
          <button type="button" aria-label="Następne zdjęcie" className="carousel-button" onClick={() => scrollPhoto("next")}><ArrowForwardRoundedIcon fontSize="small" /></button>
        </div>
      </div>
    </div>
  );
}
