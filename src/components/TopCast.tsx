import { Movie } from "../types";
import Cast from "./Cast";

const TopCast = ({ credits }: { credits: Movie["credits"] }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-5">Top Cast</h3>
      <div className="grid grid-cols-2">
        {credits?.cast
          .filter((credit, key) => key < 18)
          .map((cast, key) => {
            return (
              <div key={key} className="py-2">
                <Cast
                  name={cast.name}
                  avatar={cast.profile_path}
                  character={cast.character!}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TopCast;
