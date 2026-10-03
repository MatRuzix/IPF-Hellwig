import Image from "next/image";
import ReviewCarousel from "./reviewCarousel/ReviewCarousel";

export type RatingData = { rating: number; name: string; review: string };
export type PhotoTextContainerProps = { name: string; imgSrc: string; paragraph1: string; paragraph2: string; reviews?: RatingData[] };

export default function PhotoTextContainer({ name, imgSrc, paragraph1, paragraph2, reviews = [] }: PhotoTextContainerProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl bg-white">
      <div className="bg-slate-200/60 pt-6">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px]"><Image src={imgSrc} alt={name} fill sizes="(max-width: 639px) 280px, 320px" className="object-contain object-bottom" /></div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="mb-4 text-2xl font-semibold leading-8 text-slate-800">{name}</h3>
        <p className="text-base leading-7 text-slate-600">{paragraph1}</p>
        <details className="mt-4 text-base leading-7 text-slate-600">
          <summary className="cursor-pointer font-medium text-teal-700">Więcej o fizjoterapeucie<span className="sr-only">: {name}</span></summary>
          <p className="mt-3">{paragraph2}</p>
        </details>
        {reviews.length > 0 && <section className="mt-7 border-t border-slate-200 pt-6" aria-label={"Opinie pacjentów — " + name}>
          <h4 className="mb-4 font-semibold text-slate-800">Opinie pacjentów</h4>
          <ReviewCarousel reviews={reviews} />
        </section>}
      </div>
    </article>
  );
}
