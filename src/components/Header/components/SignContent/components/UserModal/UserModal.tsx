"use client";

import { UseComponentsStates, UseUser } from "@/hooks";
import style from "./style.module.css";
import Link from "next/link";
import { MainButton } from "@/components/MainButton";

import { GrFormClose } from "react-icons/gr";
import { useEffect } from "react";

export const UserModal = () => {
  const { user } = UseUser();
  const { loginModalIsOpen, closeLoginModalIsOpen } = UseComponentsStates();
  const { city, neighborhood, state, street, cep } = user.address;

  useEffect(() => {
    window.addEventListener("keydown", closeLoginModalIsOpen);
    return () => {
      window.removeEventListener("keydown", closeLoginModalIsOpen);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => closeLoginModalIsOpen()}
        className={`${style.userModalBackground} ${
          loginModalIsOpen ? style.userModalBackgroundHidden : ""
        }`}
      />
      <div
        onKeyUp={(event) => console.log(event.key)}
        className={`${style.userModal} ${
          loginModalIsOpen ? style.hiddenUserModal : ""
        }`}
      >
        <button
          className={style.closeButton}
          onClick={() => closeLoginModalIsOpen()}
        >
          <GrFormClose />
        </button>
        <div className={style.addressContainer}>
          <p>
            {street}, {neighborhood}
          </p>
          <p>
            {city}, {state}
          </p>
          <p>CEP: {cep}</p>
        </div>

        <MainButton.Root size="large" buttonType="warning">
          <MainButton.text text="Meus pedidos" />
        </MainButton.Root>

        <div className={style.linksContainer}>
          <Link href="">Conta</Link>
          <Link href="">Logout</Link>
        </div>
      </div>
    </>
  );
};
