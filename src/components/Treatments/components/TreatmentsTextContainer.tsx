import Image from "next/image";
import clsx from "clsx";

export type TextContainerProps = { header: string; text: string; secondaryText?: string; imgSrc: string; className?: string };

export default function TreatmentsTextContainer({ header, text, secondaryText, imgSrc, className }: TextContainerProps) {
  return (
    <article className={clsx("min-w-0 rounded-xl bg-white p-6 sm:p-8", className)}>
      <div className="mb-5 flex items-center gap-4">
        <Image src={imgSrc} alt="" width={44} height={44} className="h-11 w-11 shrink-0 object-contain" />
        <h3 className="text-xl font-semibold leading-7 text-teal-700 [@media(max-width:359px)]:text-lg sm:text-2xl">{header}</h3>
      </div>
      <p className="text-base leading-7 text-slate-600">{text}</p>
      {secondaryText && <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
        {secondaryText.split("|").map((item) => <li key={item.trim()} className="flex items-start gap-2"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />{item.trim()}</li>)}
      </ul>}
    </article>
  );
}
