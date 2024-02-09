import { Movie } from "../types";
import yearReleased from "../utils/yearReleased";
import runtime from "../utils/runtime";
import {
  FaCheck,
  FaRegComment,
  FaRegCommentDots,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import { Thumb } from "./movieheader/Thumb";
import { Title } from "./movieheader/Title";
import Container from "./Container";
import { Meta } from "./movieheader/Meta";
import MainCrew from "./movieheader/MainCrew";
import useCredits from "../hooks/useCredits";
import { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import AppContext from "../states/appContext";

type MovieHeaderProps = {
  movie: Movie;
  goToComment?: () => void;
  isWatched?: boolean;
  comment?: string | null;
};

const MovieHeader = ({
  movie,
  goToComment,
  comment,
  isWatched,
}: MovieHeaderProps) => {
  const genres = movie.genres?.map((genre) => genre.name).join(", ");
  const releaseDate = yearReleased(movie.release_date);

  const { director, writers, primaryCasts } = useCredits(movie.credits);

  const { dispatchApp } = useContext(AppContext);

  return (
    <div className="mb-10 py-10 relative overflow-hidden">
      <div
        className="absolute left-0 top-0 w-full h-full -z-20"
        style={{
          background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}) no-repeat center top`,
        }}
      ></div>
      <div className="bg-black/80 absolute left-0 top-0 w-full h-full -z-10"></div>
      <Container className="z-30 text-white/80">
        <div className="flex">
          <Thumb poster_path={movie.poster_path} />
          <div className="flex-1 pt-10">
            <Title title={movie.title} releaseDate={releaseDate} />
            <div className="mb-5">
              <Meta>{releaseDate}</Meta>
              <Meta>{genres}</Meta>
              <Meta>{runtime(movie.runtime!)}</Meta>
            </div>

            <div className="flex mb-5">
              <div className="flex mr-3 items-center text-[18px]">
                <FaStar className="mr-1 text-yellow-400" />
                <div>{Math.floor(movie.vote_average! * 10) / 10}</div>
              </div>
              {isWatched ? (
                <div
                  className={`flex text-[18px] items-center mr-3 cursor-pointer hover:text-white/50 ${
                    movie.rating! > 0 ? "text-blue-400" : ""
                  }`}
                  onClick={() =>
                    dispatchApp({ type: "VISIBILITY_RATING", show: true })
                  }
                >
                  {movie.rating! > 0 ? (
                    <FaStar className="text-blue-400 mr-1" />
                  ) : (
                    <FaRegStar className="mr-1" />
                  )}
                  <div>{movie.rating! > 0 ? movie.rating : "Rate"}</div>
                </div>
              ) : (
                ""
              )}
              <div
                className={`btn btn-sm mr-3 ${
                  isWatched
                    ? "bg-green-500 text-white border-transparent hover:bg-green-400 hover:border-transparent"
                    : ""
                }`}
              >
                {isWatched ? <FaCheck /> : <BsThreeDots />}
                <div>{isWatched ? "Watched" : "Mark As Watched"}</div>
              </div>
              {isWatched ? (
                <div className="btn btn-sm" onClick={goToComment}>
                  {comment ? <FaRegCommentDots /> : <FaRegComment />}
                  <div>
                    {comment ? "Update your comment" : "Write your comment"}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="mb-5">
              <h3 className="font-bold">Sinopsis</h3>
              <p>{movie.overview}</p>
            </div>
            <div>
              <MainCrew caption="Director" value={director} />
              <MainCrew caption="Writers" value={writers!} />
              <MainCrew caption="Stars" value={primaryCasts!} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MovieHeader;
