type TitleProps = {
  title: string;
  releaseDate: string;
};

export const Title = ({ title, releaseDate }: TitleProps) => {
  return (
    <h2 className="font-bold text-white text-4xl mb-1">
      <span>{title}</span>{" "}
      <span className="font-light">{`(${releaseDate})`}</span>
    </h2>
  );
};
