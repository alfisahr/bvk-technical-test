import { FaUser } from "react-icons/fa6";

type CastProps = {
  avatar: string | null;
  name: string;
  character: string;
};

const Cast = ({ avatar, name, character }: CastProps) => {
  return (
    <div className="flex items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mr-5">
        {avatar ? (
          <img
            src={`https://media.themoviedb.org/t/p/w138_and_h175_face${avatar}`}
          />
        ) : (
          <div className="bg-slate-300 h-24 flex items-center justify-center">
            <FaUser className="text-5xl text-slate-400" />
          </div>
        )}
      </div>
      <div>
        <h3 className="font-bold">{name}</h3>
        <span>{character}</span>
      </div>
    </div>
  );
};

export default Cast;
