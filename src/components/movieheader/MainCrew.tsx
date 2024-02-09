type MainCrewProps = {
  caption: string;
  value: string;
};

const MainCrew = ({ caption, value }: MainCrewProps) => {
  return (
    <div className="mb-1">
      <span className="inline-block w-20 font-bold">{caption}</span>
      <span>{value}</span>
    </div>
  );
};

export default MainCrew;
