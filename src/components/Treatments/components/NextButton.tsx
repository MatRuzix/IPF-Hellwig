import { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="absolute right-0 h-full w-1/12"
      type="button"
      {...restProps}
    >
      <svg className="h-1/12 opacity-60 hover:opacity-80" viewBox="0 0 532 532">
        <path
          fill="white"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

export default NextButton;
