import { ComponentPropsWithoutRef, useContext } from "react";
import { MovieContext } from "./Movie";
import { FaStar } from "react-icons/fa6";

type RatingProps = {
  rate: number;
} & ComponentPropsWithoutRef<"div">;

export const Rating = ({ rate, ...rest }: RatingProps) => {
  const id = useContext(MovieContext);

  return (
    <div id={id} className="flex items-center" {...rest}>
      <FaStar className="text-yellow-400 mr-2" />
      <div className="text-white">{Math.floor(rate * 10) / 10}</div>
    </div>
  );
};

Rating.displayName = "Movie.Rating";
