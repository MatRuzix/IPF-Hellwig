import Image from "next/image";

import Button from "@/components/button/Button";
import ZnanyLekarz from "@/icons/ZnanyLekarz";

export type PersonCardProps = {
  name: string;
  imageSrc: string;
  href: string;
};

const PersonCard: React.FC<PersonCardProps> = ({ name, imageSrc, href }) => {
  return (
    <div className="grow flex mx-3 my-3 px-6 py-3 rounded-lg bg-slate-200 justify-between items-center z-10">
      <Image
        className="rounded-lg"
        src={imageSrc}
        alt="photo"
        width={60}
        height={60}
      />
      <div className="align-middle flex items-center">{name}</div>
      <Button
        custom={true}
        className="bg-chillGreenrz w-36 h-12"
        icon={<ZnanyLekarz />}
        onClick={() => {
          window.open(href, "_blank");
        }}
      />
    </div>
  );
};

export default PersonCard;
