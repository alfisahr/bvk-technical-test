import { useContext } from "react";
import Layout from "../components/Layout";
import AppContext from "../states/appContext";
import { Movie } from "../components/movie/Movie";
import WatchedButton from "../components/WatchedButton";
import { Link } from "react-router-dom";

function Watched() {
  const { watchedMovies } = useContext(AppContext);

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl mb-5">Watched Movies</h1>
        <div className="grid grid-cols-5 gap-3">
          {watchedMovies &&
            watchedMovies.map((movie, key) => {
              return (
                <Movie key={key} id={`${movie.id}`}>
                  <Movie.Thumb>
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      />
                    </Link>
                  </Movie.Thumb>
                  <Movie.Title>{movie.title}</Movie.Title>
                  <Movie.Released>{movie.release_date}</Movie.Released>
                  <Movie.Action>
                    <WatchedButton
                      isChecked={
                        watchedMovies.filter((w) => w.id === movie.id).length >
                        0
                      }
                    />
                  </Movie.Action>
                </Movie>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Watched;
