"use client";
import { MouseEventHandler } from "react";
import style from "./style.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { UserModal } from "./components";
import { UseComponentsStates } from "@/hooks";

export const SignContent = () => {
  const { toggleLoginModal } = UseComponentsStates();

  const SignContentToggleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    toggleLoginModal();
  };

  return (
    <div className={style.sign}>
      <div className={style.signContent} onClick={SignContentToggleClick}>
        <h4>Olá, Usuário</h4>
        <BiSolidUserCircle size={50} />
      </div>
      <UserModal />
    </div>
  );
};
