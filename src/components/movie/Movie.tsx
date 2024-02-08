import { ReactNode, createContext } from "react";
import { Thumb } from "./Thumb";
import { Title } from "./Title";
import { Released } from "./Released";
import { Action } from "./Action";
import { Wrapper } from "./Wrapper";
import { Rating } from "./Rating";

export const MovieContext = createContext<string | undefined>(undefined);

interface MovieComposition {
  Thumb: typeof Thumb;
  Wrapper: typeof Wrapper;
  Title: typeof Title;
  Released: typeof Released;
  Action: typeof Action;
  Rating: typeof Rating;
}

type MovieProps = {
  id: string | undefined;
  children: ReactNode;
};

export const Movie: React.FC<MovieProps> & MovieComposition = ({
  id,
  children,
}: MovieProps) => {
  return (
    <MovieContext.Provider value={id}>
      <div className="border border-solid border-gray-300 rounded-md overflow-hidden shadow-lg hover:shadow-xl">
        {children}
      </div>
    </MovieContext.Provider>
  );
};

Movie.Thumb = Thumb;
Movie.Title = Title;
Movie.Released = Released;
Movie.Action = Action;
Movie.Wrapper = Wrapper;
Movie.Rating = Rating;
