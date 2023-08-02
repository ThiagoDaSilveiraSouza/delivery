"use client";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import styles from "./style.module.css";
import { FiSearch } from "react-icons/fi";

export const SearchBar: FC = () => {
  const [serchInputValue, setSearchInputValue] = useState<string>("");

  const searchWord = () => {
    console.log("serchInputValue", serchInputValue);
  };

  const userHandlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const formElement = event.target as HTMLFormElement;
    event.preventDefault();
    searchWord();
    formElement.reset();
  };

  const searchInputHandlerChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setSearchInputValue(value);
  };

  return (
    <form className={styles.searchBarForm} onSubmit={userHandlerSubmit}>
      <FiSearch />
      <input
        onChange={searchInputHandlerChange}
        type="text"
        name="search"
        placeholder="Buscar"
      />
    </form>
  );
};
