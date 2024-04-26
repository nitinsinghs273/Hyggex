import React from "react";

const shapes = {
  round: "rounded-[24px]",
  square: "rounded-[0px]",
};
const variants = {
  gradient: {
    undefined_undefined:
      "bg-gradient-to-r from-blue-900 to-blue-500 text-base md:text-lg text-white",
  },
};
const sizes = {
  xs: "h-[48px] px-[35px] text-lg",
  sm: "h-[60px] px-[5px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "xs",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
