import clsx from "clsx";
import type { MouseEventHandler, ReactNode } from "react";

type HeaderLinkProps = {
  text?: string;
  targetId: string;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function HeaderLink({ text, targetId, children, className, onClick }: HeaderLinkProps) {
  return (
    <a
      href={"#" + targetId}
      onClick={onClick}
      aria-label={!text && targetId === "hero" ? "IPF Hellwig — strona główna" : undefined}
      className={clsx("transition-colors hover:text-teal-700", className)}
    >{text}{children}</a>
  );
}
