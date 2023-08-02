"use client";

import { ImCart } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import style from "./style.module.css";
import { UseCart } from "@/hooks";

export const IconsContainer = () => {
  const { totalOfItems } = UseCart();
  return (
    <div className={style.iconsContainer}>
      <div className={style.iconBox}>
        {totalOfItems ? <span>{totalOfItems}</span> : ""}
        <ImCart />
      </div>
      <div className={style.iconBox}>
        <span />
        <FaBell />
      </div>
    </div>
  );
};
