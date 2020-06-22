import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import { useRegister } from "./hooks/useRegister";
import { Layout } from "./Layout";

export const Register = () => {
    const navigation = useNavigation();
    const { state, handleChange, handleSubmit } = useRegister();
    const { setToken } = useAuth();

    const handlePressSubmit = async () => {
        try {
            const user = await handleSubmit();
            console.log("Handle Submit", user);
            setToken(user?.token);
            // navigation.replace("Home", { user });
        } 
        catch (error) {
            console.log("error", error);
        }
    };
    return <Layout state={state} handleChange={handleChange} handlePressSubmit={handlePressSubmit} />
}