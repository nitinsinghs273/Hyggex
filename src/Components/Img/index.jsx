const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  onClick,
  ...restProps
}) => {
  if (onClick) {
    return (
      <img
        className={className}
        src={src}
        alt={alt}
        {...restProps}
        loading={"lazy"}
        onClick={onClick}
      />
    );
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
