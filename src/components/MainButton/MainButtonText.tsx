import { HTMLAttributes } from "react";

interface MainButtonTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export const MainButtonText = ({ text, ...rest }: MainButtonTextProps) => {
  return <span {...rest}>{text}</span>;
};
