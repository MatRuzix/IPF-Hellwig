import { motion } from "framer-motion";

import Button from "../button/Button";
import LogoBottomWhite from "@/icons/LogoBottomWhite";

const HeroLogo = () => {
  return (
    <div className="w-full h-full absolute z-[15]">
      <motion.div
        className="flex flex-col justify-center space-y-24 h-full mobile-xs:h-auto center-absolute-y w-1/3 z-[16] absolute opacity-0 right-0 top-0"
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.25 }}
      >
        <LogoBottomWhite />
        <Button
          name="DOWIEDZ SIĘ WIĘCEJ"
          variant="transparent"
          className="invisible pointer-events-none normalScreen:hidden hamburger:hidden"
        />
      </motion.div>
    </div>
  );
};

export default HeroLogo;
