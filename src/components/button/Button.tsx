"use client";

import clsx from "clsx";
import { MouseEventHandler } from "react";

type ButtonProps = {
  name?: string;
  variant?:
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "orange"
    | "transparent"
    | "black";
  fontColor?: "white" | "black";
  className?: string;
  type?: "submit" | "button";
  onClick?: MouseEventHandler;
  id?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  custom?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  variant = "blue",
  type = "button",
  fontColor = "white",
  onClick,
  id,
  icon,
  disabled = false,
  custom = false,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "flex gap-2 items-center justify-center font-medium rounded-lg text-base px-8 text-center",
        {
          "bg-blue-500 hover:bg-blue-800 py-2": variant === "blue" && !custom,
          "bg-black hover:bg-slate-700 py-2": variant === "black" && !custom,
          "bg-red-500 hover:bg-red-800 py-3": variant === "red" && !custom,
          "bg-transparent py-3 border border-solid":
            variant === "transparent" && !custom,
          " bg-yellow-400 hover:bg-yellow-600 py-2":
            variant === "yellow" && !custom,
          "bg-green-600 hover:bg-green-800 py-2":
            variant === "green" && !custom,
          "text-white bg-gray-400 hover:text-white hover:bg-gray-400": disabled,
          "text-white": fontColor === "white",
          "text-black": fontColor === "black",
        },
        className
      )}
    >
      {name}
      {icon}
    </button>
  );
};

export default Button;
