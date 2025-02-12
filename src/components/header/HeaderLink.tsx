import { Link } from "react-scroll";
import { MouseEventHandler } from "react";

import clsx from "clsx";

type HeaderLinkProps = {
  text?: string;
  targetId: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({
  text,
  targetId,
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        "hover:scale-110 duration-300 transition-transform hamburger:w-1/3 mobile:w-1/3 mobile-xs:w-1/2",
        className
      )}
    >
      <Link
        className="cursor-pointer relative"
        activeClass="active"
        to={targetId}
        spy={true}
        smooth={true}
        offset={-144}
        duration={500}
      >
        <div className="w-full h-full absolute" onClick={onClick}></div>
        {text}
        {children}
      </Link>
    </div>
  );
};

export default HeaderLink;
