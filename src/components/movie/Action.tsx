import { ComponentPropsWithoutRef, useContext } from "react";
import { MovieContext } from "./Movie";

export const Action = (props: ComponentPropsWithoutRef<"div">) => {
  const id = useContext(MovieContext);

  return (
    <div id={id} {...props}>
      {props.children}
    </div>
  );
};

Action.displayName = "Movie.Action";
