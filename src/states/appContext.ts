import { Dispatch, createContext } from "react";
import { Movie } from "../types";
import { WatchedAction } from "./watchedReducer";
import { MoviesAction } from "./moviesReducer";
import { AppAction, GeneralAppState } from "./appReducer";

interface AppContextType {
  watchedMovies: Movie[];
  movies: Movie[];
  appState: GeneralAppState;
  dispatchWatched: Dispatch<WatchedAction>;
  dispatchMovies: Dispatch<MoviesAction>;
  dispatchApp: Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export default AppContext;
