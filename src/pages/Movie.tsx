import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import MovieHeader from "../components/MovieHeader";
import { useContext, useEffect, useRef, useState } from "react";
import { Movie as MovieType } from "../types";
import TopCast from "../components/TopCast";
import AdditionalInfo from "../components/AdditionalInfo";
import Keywords from "../components/Keywords";
import Container from "../components/Container";
import numberFormat from "../utils/numberFormat";
import Comments from "../components/Comments";
import apiClient from "../services/apiClient";
import AppContext from "../states/appContext";

const Movie = () => {
  const params = useParams();
  const { watchedMovies, dispatchApp } = useContext(AppContext);

  const [data, setData] = useState<MovieType | undefined>(undefined);
  const [showComment, setShowComment] = useState(false);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    if (
      data &&
      watchedMovies.filter((watch) => watch.id === parseInt(params.id!))
        .length > 0
    ) {
      setIsWatched(true);
      console.log(watchedMovies);
      data.comment = watchedMovies[0].comment;
      data.rating = watchedMovies[0].rating;
      //console.log(watchedMovies[0].comment);
    }
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      const res = await apiClient.get(`/movie/${params.id}`);
      //console.log(res.data);
      setData(res.data);
      dispatchApp({
        type: "SET_SELECTED_MOVIE",
        movieId: parseInt(params.id!),
      });
    }
    fetchData();

    return () => {
      dispatchApp({ type: "SET_SELECTED_MOVIE", movieId: 0 });
    };
  }, []);

  const additionalInfo = [
    {
      caption: "Status",
      value: data?.status,
    },
    {
      caption: "Original Language",
      value: data?.original_language,
    },
    {
      caption: "Budget",
      value: numberFormat(data?.budget!),
    },
    {
      caption: "Revenue",
      value: numberFormat(data?.revenue!),
    },
  ];

  const ref = useRef(null);

  const handleClick = () => {
    const refcur = ref.current as any;
    refcur.scrollIntoView({ behavior: "smooth" });
    setShowComment(true);
  };

  if (data) {
    return (
      <Layout useContainer={false}>
        <div>
          <MovieHeader
            comment={data.comment}
            movie={data}
            goToComment={handleClick}
            isWatched={isWatched}
          />
          <Container>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <TopCast credits={data.credits} />
                <Comments
                  movieId={params.id}
                  comment={data.comment}
                  data={data.reviews?.results!}
                  ref={ref}
                  showForm={showComment}
                />
              </div>
              <div>
                {additionalInfo.map((ai, key) => {
                  return (
                    <AdditionalInfo
                      key={key}
                      caption={ai.caption}
                      value={ai.value}
                    />
                  );
                })}
                <Keywords keywords={data.keywords?.keywords} />
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div>Loading data...</div>
    </Layout>
  );
};

export default Movie;
