export const Thumb = ({ poster_path }: { poster_path: string }) => {
  return (
    <div className="mr-10 w-[350px] rounded-md overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="w-full"
        alt=""
      />
    </div>
  );
};
