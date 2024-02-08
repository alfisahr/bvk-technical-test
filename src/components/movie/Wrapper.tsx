import { ComponentPropsWithoutRef, useContext } from "react";
import { MovieContext } from "./Movie";

export const Wrapper = (props: ComponentPropsWithoutRef<"div">) => {
  const id = useContext(MovieContext);

  return (
    <div id={id} {...props}>
      {props.children}
    </div>
  );
};

Wrapper.displayName = "Movie.Body";
