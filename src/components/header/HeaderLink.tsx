import { Link } from "react-scroll";

import clsx from "clsx";

type HeaderLinkProps = {
  text?: string;
  targetId: string;
  className?: string;
  children?: React.ReactNode;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({
  text,
  targetId,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "hover:scale-110 duration-300 transition-transform",
        className
      )}
    >
      <Link
        className="cursor-pointer"
        activeClass="active"
        to={targetId}
        spy={true}
        smooth={true}
        offset={-144}
        duration={500}
      >
        {text}
        {children}
      </Link>
    </div>
  );
};

export default HeaderLink;
