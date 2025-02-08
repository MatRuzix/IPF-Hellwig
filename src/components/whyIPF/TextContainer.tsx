"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type TextContainerProps = {
  text: string;
  header?: string;
  imgSrc: string;
};

const TextContainer: React.FC<TextContainerProps> = ({
  text,
  header,
  imgSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col w-96 items-center bg-white px-6 py-4 h-48 rounded-lg text-base leading-7 shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.1 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="overflow-hidden"
        style={{
          maskImage: isHovered
            ? "none"
            : "linear-gradient(to bottom, transparent, white 0%, white 80%, transparent)",
          WebkitMaskImage: isHovered
            ? "none"
            : "linear-gradient(to bottom, transparent, white 0%, white 80%, transparent)",
        }}
      >
        <motion.div
          className="flex flex-col items-center justify-center space-y-3"
          animate={{ y: isHovered ? "-50%" : "0%" }}
          transition={{
            y: isHovered
              ? { duration: 8, ease: "easeOut" } // Moving up
              : { duration: 1, ease: "easeInOut" }, // Moving back down
          }}
        >
          <Image src={imgSrc} alt="text-icon" width={50} height={50} />
          <p className="text-xl mb-3 text-blue-900 font-bold">{header}</p>
          <p className="text-sm">{text}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TextContainer;
