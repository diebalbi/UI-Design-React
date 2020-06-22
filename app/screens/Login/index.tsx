import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Layout } from './layout';
import { useLogin } from "./hooks/useLogin";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const navigation = useNavigation();
    const { state, handleChange, handleSubmit } = useLogin();
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

  return <Layout state={state} handleChange={handleChange} navigation={navigation} handlePressSubmit={handlePressSubmit} />;
}