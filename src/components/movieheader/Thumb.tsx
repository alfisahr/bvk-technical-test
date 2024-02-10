export const Thumb = ({ poster_path }: { poster_path: string }) => {
  return (
    <div className="mx-3 md:mr-10 md:w-[350px] sm:w-full xs:w-full rounded-md overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="w-full"
        alt=""
      />
    </div>
  );
};
