import { ComponentPropsWithoutRef } from "react";

const Container = ({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={`container mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
