import * as React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRegister } from "./hooks/useRegister";
import { Layout } from "./Layout";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";

export const Register = ({ navigation }) => {
    const { state, handleChange, handleSubmit } = useRegister();
    const { setToken } = useAuth();
    useSetNavigationOptions("Register", false);

    const handlePressSubmit = async () => {
        try {
            const data = await handleSubmit();
            setToken(data.register?.id);
            navigation.popToTop();
        } 
        catch (error) {
            console.log("error", error);
        }
    };
    return <Layout state={state} handleChange={handleChange} handlePressSubmit={handlePressSubmit} />
}