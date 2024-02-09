import { Movie } from "../types";

const useCredits = (credits: Movie["credits"]) => {
  const selectedCredits = (knownFor: string, creditObj = credits?.crew) =>
    creditObj?.filter((credit) => {
      return credit.known_for_department === knownFor && credit.gender > 0;
    });
  const director = selectedCredits("Directing");
  const distinctDirector = [...new Set(director?.map((x) => x.name))].join(
    ", "
  );
  const writers = selectedCredits("Writing")
    ?.map((writer) => writer.name)
    .join(", ");
  const primaryCasts = selectedCredits("Acting", credits?.cast)
    ?.filter((cast, key) => key < 3)
    ?.map((cast) => cast.name)
    .join(", ");

  return { director: distinctDirector, writers, primaryCasts };
};

export default useCredits;
