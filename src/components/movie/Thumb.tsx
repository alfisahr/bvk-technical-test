import React, { useContext } from "react";
import { MovieContext } from "./Movie";

type ThumbProps = {
  children: React.ReactElement<"img">;
};

export const Thumb = ({ children }: ThumbProps) => {
  const id = useContext(MovieContext);

  return (
    <div id={id} className="relative">
      {children}
    </div>
  );
};

Thumb.displayName = "Movie.Thumb";
