import { ReactNode } from "react";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface IDefaultComponentStates {
  useLoginModalIsOpen: [boolean, Dispatch<SetStateAction<boolean>>];
}

const defaultComponentStates: IDefaultComponentStates = {
  useLoginModalIsOpen: [false, () => {}],
};

export const ComponentsStatesContext = createContext<IDefaultComponentStates>(
  defaultComponentStates
);

export const ComponentsStatesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const componentsState: IDefaultComponentStates = {
    useLoginModalIsOpen: [loginModalIsOpen, setLoginModalIsOpen],
  };

  return (
    <ComponentsStatesContext.Provider value={componentsState}>
      {children}
    </ComponentsStatesContext.Provider>
  );
};
