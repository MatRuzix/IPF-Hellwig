"use client";

import { useEffect, useState } from "react";

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
  const [vw, setVw] = useState<number>(0);

  useEffect(() => {
    setVw(
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )
    );
  }, []);

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
        offset={vw > 640 ? -144 : -84}
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
