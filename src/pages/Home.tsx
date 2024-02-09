import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Movie as MovieType } from "../types";
import { Movie } from "../components/movie/Movie";
import WatchedButton from "../components/WatchedButton";
import AppContext from "../states/appContext";
import { Link } from "react-router-dom";
import apiClient from "../services/apiClient";

function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const {
    watchedMovies,
    movies: moviesContext,
    dispatchMovies,
    dispatchWatched,
  } = useContext(AppContext);

  useEffect(() => {
    if (moviesContext.length === 0) {
      async function fetchData() {
        const res = await apiClient.get("/trending/movie/day");
        setMovies(res.data.results);
        dispatchMovies({ type: "ADD_MOVIES", movies: res.data.results });
      }
      fetchData();
    } else {
      setMovies(moviesContext);
    }
  }, []);

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
      <h1 className="font-bold text-2xl mb-5">Popular Movies</h1>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 gap-5 sm:grid-cols-2 xs:grid-cols-1">
        {movies &&
          movies.map((movie, key) => {
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
                          isChecked={
                            watchedMovies.filter((w) => w.id === movie.id)
                              .length > 0
                          }
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
    </Layout>
  );
}

export default Home;
