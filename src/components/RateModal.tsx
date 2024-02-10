import { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import AppContext from "../states/appContext";
import { Movie } from "../types";

const RateModal = () => {
  const { appState, watchedMovies, dispatchApp, dispatchWatched } =
    useContext(AppContext);
  const [movieModal, setMovieModal] = useState({} as Movie);

  useEffect(() => {
    if (appState.movieId > 0) {
      const filteredMovie = watchedMovies.filter(
        (movie) => movie.id === appState.movieId
      );
      if (filteredMovie.length > 0) {
        setMovieModal(filteredMovie[0]);
        setRating(filteredMovie[0].rating!);
      }
    }

    if (appState.rating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [appState]);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = () => {
    dispatchApp({ type: "VISIBILITY_RATING", show: false });
  };

  const handleSubmitRating = () => {
    dispatchWatched({
      type: "SET_RATING",
      payload: { movieId: movieModal.id, rate: rating },
    });
    dispatchApp({ type: "VISIBILITY_RATING", show: false });
  };

  return (
    <div
      className={`absolute w-full h-full z-40 flex justify-center ${
        appState.rating ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute w-full h-full bg-black/80 z-10 flex justify-center"
        onClick={handleClick}
      ></div>
      <div className="w-[500px] h-[300px] bg-white mt-32 flex flex-col items-center z-20">
        <div className="-mt-12 mb-5">
          <FaStar className="text-8xl text-blue-500" />
        </div>
        <h3 className="uppercase font-semibold text-sm">Rate this</h3>
        <h2 className="font-bold text-2xl mb-5">{movieModal.title}</h2>
        <Stars
          rating={rating}
          hover={hover}
          onChange={(index) => setRating(index)}
          onMouseEnter={(index) => setHover(index)}
          onMouseLeave={(index) => setHover(index)}
        />
        <button
          onClick={handleSubmitRating}
          className={`btn btn-wide btn-neutral ${
            rating > 0 ? "" : "btn-disabled"
          }`}
        >
          Rate
        </button>
      </div>
    </div>
  );
};

export default RateModal;

type StarsProps = {
  rating: number;
  hover: number;
  onChange: (param: number) => void;
  onMouseEnter: (param: number) => void;
  onMouseLeave: (param: number) => void;
};

function Stars({
  rating,
  hover,
  onChange,
  onMouseEnter,
  onMouseLeave,
}: StarsProps) {
  const keys = [...Array(10).keys()];

  return (
    <div className="flex mb-5">
      {keys.map((star, index) => {
        const currentRating = index + 1;
        const StarComponent =
          currentRating <= (hover || rating) ? FaStar : FaRegStar;
        return (
          <label key={index}>
            <input
              className="hidden"
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => onChange(currentRating)}
            />
            <StarComponent
              className={`text-3xl cursor-pointer ${
                currentRating <= (hover || rating) ? "text-yellow-600" : ""
              }`}
              onMouseEnter={() => onMouseEnter(currentRating)}
              onMouseLeave={() => onMouseLeave(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
