import { ButtonHTMLAttributes } from "react";
import style from "./style.module.css";

interface MainButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "done" | "warning" | "negate";
  size?: "small" | "medium" | "large";
}

export const MainButtonRoot = ({
  children,
  buttonType,
  size,
  ...rest
}: MainButtonRootProps) => {
  const sizeClass = style[size!] || style.medium;
  const buttonTypeClass = style[buttonType!] || style.done;
  const concatenateClass = `${style.mainButton} ${sizeClass} ${buttonTypeClass}`;

  return (
    <button className={concatenateClass} {...rest}>
      {children}
    </button>
  );
};
