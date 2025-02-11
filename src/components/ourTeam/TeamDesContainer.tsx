import { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import clsx from "clsx";

type RatingData = {
  rating: number;
  name: string;
  review: string;
};

export type TeamDesProps = {
  name: string;
  description?: string;
  description2?: string;
  imageSrc: string;
  orientation: "left" | "right";
  reviews?: RatingData[];
};

const TeamDesContainer: React.FC<TeamDesProps> = ({
  description,
  imageSrc,
  reviews,
  name,
  description2,
  orientation,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="flex flex-col-reverse h-88 items-center bg-white rounded-lg text-base leading-7 shadow-lg overflow-hidden relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        width: isHovered ? "52rem" : "22rem",
        height: isHovered ? "26rem" : "22rem",
      }}
    >
      <motion.div
        className="flex flex-col text-sm py-6 px-5 absolute h-16 w-full top-0 bg-black z-30"
        animate={{ opacity: isHovered ? "100%" : "0%" }}
        transition={{
          opacity: isHovered
            ? { duration: 0.5, delay: 0.2 }
            : { duration: 0.08 },
        }}
      ></motion.div>
      <motion.div
        className={clsx(
          "flex flex-col-reverse w-88 h-88 items-center bg-white text-base leading-7 shadow-lg overflow-hidden absolute z-20",
          {
            "bottom-0 right-0": orientation == "left",
            "bottom-0 left-0": orientation == "right",
          }
        )}
      >
        <Image src={imageSrc} alt="photo" fill />
        <div className="z-10 w-full text-white flex justify-center py-3 bg-slate-800">
          {name}
        </div>
      </motion.div>
      <motion.div
        className={clsx(
          "flex flex-col text-sm py-6 px-5 absolute z-10 w-[calc(100%-22rem)] h-full",
          { "left-0": orientation == "left", "right-0": orientation == "right" }
        )}
        animate={{ opacity: isHovered ? "100%" : "0%" }}
        transition={{
          opacity: isHovered
            ? { duration: 0.5, delay: 0.2 }
            : { duration: 0.08 },
        }}
      >
        <div className="px-6 pt-16 z-10 w-full">{description}</div>
        {description2 && (
          <div className="px-6 py-5 z-10 w-full">{description2}</div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TeamDesContainer;
