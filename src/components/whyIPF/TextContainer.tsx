import Image from "next/image";

type TextContainerProps = { header: string; text: string; imgSrc: string };

export default function TextContainer({ header, text, imgSrc }: TextContainerProps) {
  return (
    <article className="flex min-w-0 flex-col rounded-xl bg-white p-6 sm:p-7">
      <Image src={imgSrc} alt="" width={44} height={44} className="mb-5 h-11 w-11 object-contain" />
      <h3 className="mb-3 text-xl font-semibold leading-7 text-slate-800">{header}</h3>
      <p className="text-base leading-7 text-slate-600">{text}</p>
    </article>
  );
}
