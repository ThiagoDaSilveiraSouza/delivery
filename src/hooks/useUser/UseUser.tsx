import { useContext } from "react";
import { UserContext } from "@/contexts";

export const UseUser = () => {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
};
