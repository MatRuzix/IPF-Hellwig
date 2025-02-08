import { motion } from "framer-motion";

import LogoBottomWhite from "@/icons/LogoBottomWhite";

const HeroLogo = () => {
  return (
    <div className="w-full h-full absolute z-[15]">
      <motion.div
        className="h-full w-1/3 z-[16] absolute opacity-0 right-0"
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.25 }}
      >
        <LogoBottomWhite />
      </motion.div>
    </div>
  );
};

export default HeroLogo;
