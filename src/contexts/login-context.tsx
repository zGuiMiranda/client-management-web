import { User } from "@/shared/interfaces";
import React, { ReactNode, createContext, useContext, useState } from "react";

type Login = {
  user: Pick<User, "login">;
  isLogged: boolean;
};

type PropsEntityContext = {
  state: Login;
  setState: React.Dispatch<React.SetStateAction<Login>>;
};

const DEFAULT_VALUE = {
  state: {
    user: { login: "" },
    isLogged: false,
  },
  setState: () => {},
};

export const LoginContext = createContext<PropsEntityContext>(DEFAULT_VALUE);

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <LoginContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
