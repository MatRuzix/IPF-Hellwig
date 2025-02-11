import Image from "next/image";

type CoopLinkProps = {
  href: string;
  imgSrc: string;
  height: number;
  width: number;
};

const CoopLink: React.FC<CoopLinkProps> = ({ href, imgSrc, height, width }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="cursor-pointer hover:scale-[117%] hover:translate-y-[5%] transition-all duration-200 ease-in-out"
    >
      <Image src={imgSrc} alt="coopImg" height={height} width={width} />
    </a>
  );
};

export default CoopLink;
