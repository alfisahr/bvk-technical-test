import { useContext } from "react";
import { Movie as MovieType } from "../types";
import Layout from "../components/Layout";
import AppContext from "../states/appContext";
import { Movie } from "../components/movie/Movie";
import WatchedButton from "../components/WatchedButton";
import { Link } from "react-router-dom";

function Watched() {
  const { watchedMovies, dispatchWatched } = useContext(AppContext);

  const handleClick = (movie: MovieType) => {
    const isExist = watchedMovies.filter((w) => w.id === movie.id);
    if (isExist.length > 0) {
      dispatchWatched({ type: "DELETE_WATCHED", movieId: movie.id });
    } else {
      dispatchWatched({ type: "ADD_WATCHED", movie });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl mb-5">Watched Movies</h1>
        <div className="grid grid-cols-5 gap-3">
          {watchedMovies &&
            watchedMovies.map((movie, key) => {
              return (
                <Movie key={key} id={`${movie.id}`}>
                  <Movie.Wrapper className="relative">
                    <Movie.Thumb>
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          className="w-full"
                          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        />
                      </Link>
                    </Movie.Thumb>
                    <Movie.Wrapper className="absolute bottom-0 left-0 w-full px-3 pt-10 pb-2 bg-gradient-to-t from-black to-transparent">
                      <Movie.Wrapper className="flex justify-between">
                        <Movie.Rating
                          rate={movie.vote_average!}
                          className="flex mr-1 items-center text-sm"
                        />
                        <Movie.Action>
                          <WatchedButton
                            isChecked="delete"
                            onClick={() => handleClick(movie)}
                          />
                        </Movie.Action>
                      </Movie.Wrapper>
                    </Movie.Wrapper>
                  </Movie.Wrapper>
                  <Movie.Wrapper className="px-3 py-2">
                    <Movie.Title>
                      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </Movie.Title>
                    <Movie.Released>{movie.release_date}</Movie.Released>
                  </Movie.Wrapper>
                </Movie>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Watched;
