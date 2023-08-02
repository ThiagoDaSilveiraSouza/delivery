import { ReactNode } from "react";
import { IUser } from "@/types/IUser";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface IDefaultValue {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const defaultUser = {
  name: "Usuário",
  phone: 0,
  address: {
    street: "Nome da rua",
    number: "100",
    complement: "Complemento",
    neighborhood: "Nome do bairro",
    city: "Cidade",
    state: "Estado",
    cep: "12345-678",
  },
};

const defaultValue: IDefaultValue = {
  user: defaultUser,
  setUser: () => {},
};
export const UserContext = createContext(defaultValue);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>(defaultUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
