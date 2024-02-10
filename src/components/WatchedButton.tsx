import { ComponentPropsWithoutRef } from "react";
import { FaCheck, FaRegTrashCan } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

interface WatchedButtonProps extends ComponentPropsWithoutRef<"div"> {
  isChecked?: "default" | "checked" | "delete";
}

export const WatchedButton = ({
  isChecked = "default",
  ...rest
}: WatchedButtonProps) => {
  const buttonState = {
    default: {
      classNames: "btn-neutral",
      component: <BsThreeDots />,
      caption: "Marked As Watched",
    },
    checked: {
      classNames:
        "bg-green-500 border-transparent hover:bg-green-400 hover:border-transparent",
      component: <FaCheck />,
      caption: "Watched",
    },
    delete: {
      classNames:
        "bg-red-500 border-transparent hover:bg-red-400 hover:border-transparent text-white",
      component: <FaRegTrashCan />,
      caption: "Delete",
    },
  };
  return (
    <div
      className={`btn btn-xs ${buttonState[isChecked].classNames}`}
      {...rest}
    >
      {buttonState[isChecked].component}
      <span className={``}>{buttonState[isChecked].caption}</span>
    </div>
  );
};

export default WatchedButton;
