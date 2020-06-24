import * as React from "react";

export const useAuth = () => {
    const AuthContext = React.createContext({
        token: "",
        setToken: (x: string) => {
          console.log("X", x);
        },
      });

    const { token, setToken } = React.useContext(AuthContext);
    return { token, setToken, AuthContext };
};