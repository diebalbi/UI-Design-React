import * as React from "react";
import { AuthContext } from "../App";

export const useAuth = () => {
    const { token, setToken } = React.useContext(AuthContext);
    return { token, setToken };
};