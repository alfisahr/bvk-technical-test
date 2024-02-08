import { ComponentPropsWithoutRef, useContext } from "react";
import { MovieContext } from "./Movie";

export const Title = (props: ComponentPropsWithoutRef<"h3">) => {
  const id = useContext(MovieContext);

  return (
    <h3 id={id} className="font-bold" {...props}>
      {props.children}
    </h3>
  );
};

Title.displayName = "Movie.Title";
