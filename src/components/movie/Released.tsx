import { ComponentPropsWithoutRef, useContext } from "react";
import { MovieContext } from "./Movie";

export const Released = (props: ComponentPropsWithoutRef<"div">) => {
  const id = useContext(MovieContext);

  return (
    <div id={id} {...props}>
      {props.children}
    </div>
  );
};

Released.displayName = "Movie.Released";
