import { useContext } from "react";
import { ComponentsStatesContext } from "@/contexts";

export const UseComponentsStates = () => {
  const { useLoginModalIsOpen } = useContext(ComponentsStatesContext);

  // loginModalIsOpen start
  const [loginModalIsOpen, setLoginModalIsOpen] = useLoginModalIsOpen;

  const openLoginModalIsOpen = () => setLoginModalIsOpen(true);

  const closeLoginModalIsOpen = () => setLoginModalIsOpen(true);

  const toggleLoginModal = () => setLoginModalIsOpen((isOpen) => !isOpen);
  // loginModalIsOpen end

  return {
    loginModalIsOpen,
    openLoginModalIsOpen,
    closeLoginModalIsOpen,
    toggleLoginModal,
  };
};
