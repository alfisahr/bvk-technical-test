import { ComponentPropsWithoutRef } from "react";
import { FaCheck, FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

interface WatchedButtonProps extends ComponentPropsWithoutRef<"div"> {
  isChecked?: boolean;
}

export const WatchedButton = ({
  isChecked = false,
  ...rest
}: WatchedButtonProps) => {
  return (
    <div
      className={`btn btn-xs ${
        isChecked
          ? "bg-green-500 border-transparent hover:bg-green-400 hover:border-transparent"
          : "btn-neutral"
      }`}
      {...rest}
    >
      {isChecked ? <FaCheck className="" /> : <BsThreeDots className="" />}
      <span className={``}>{isChecked ? "Watched" : "Marked As Watched"}</span>
    </div>
  );
};

export default WatchedButton;
