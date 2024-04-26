import React from "react";

const sizes = {
  "3xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "2xl": "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  xl: "text-2xl font-bold md:text-[22px]",
  "5xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  "4xl": "text-[38px] font-bold md:text-4xl sm:text-[34px]",
  s: "text-base font-semibold",
  md: "text-lg font-semibold",
  xs: "text-xs font-bold",
  lg: "text-xl font-bold",
};

const Heading = ({
  children,
  className = "",
  size = "1xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black font-lato ${className} ${sizes[size]}  `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
