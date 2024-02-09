import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/routes";
import { useReducer } from "react";
import watchedReducer from "./states/watchedReducer";
import AppContext from "./states/appContext";
import moviesReducer from "./states/moviesReducer";
import appReducer, { GeneralAppState } from "./states/appReducer";

function App() {
  const [watchedMovies, dispatchWatched] = useReducer(watchedReducer, []);
  const [movies, dispatchMovies] = useReducer(moviesReducer, []);
  const [appState, dispatchApp] = useReducer(appReducer, {} as GeneralAppState);
  return (
    <AppContext.Provider
      value={{
        watchedMovies,
        dispatchWatched,
        movies,
        dispatchMovies,
        appState,
        dispatchApp,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
