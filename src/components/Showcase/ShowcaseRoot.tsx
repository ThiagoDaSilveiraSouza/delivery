import { HTMLAttributes } from "react";
import style from "./style.module.css";
interface ShowcaseRootProps extends HTMLAttributes<HTMLElement> {}

export const ShowcaseRoot = ({
  children,
  className,
  ...rest
}: ShowcaseRootProps) => {
  return (
    <main
      {...rest}
      className={`centralizer ${style.showCaseRoot} ${className}`}
    >
      {children}
    </main>
  );
};
