import Image from "next/image";

type CoopLinkProps = { href: string; imgSrc: string; height: number; width: number; name: string };

export default function CoopLink({ href, imgSrc, height, width, name }: CoopLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} aria-label={name} className="mx-auto flex min-h-32 w-full max-w-72 items-center justify-center rounded-xl p-4 transition-colors hover:bg-slate-50">
      <Image src={imgSrc} alt={name} height={height} width={width} sizes="(max-width: 639px) 130px, 240px" className="h-auto max-h-32 w-auto max-w-full object-contain" />
    </a>
  );
}
