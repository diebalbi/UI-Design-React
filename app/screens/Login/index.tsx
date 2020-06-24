import * as React from "react";
import { Layout } from './Layout';
import { useLogin } from "./hooks/useLogin";
import { useAuth } from "../../hooks/useAuth";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";
import { useAlert } from "../../hooks/useAlert";

export const Login = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const { state, handleChange, handleSubmit } = useLogin();
  const { token, setToken } = useAuth();
  useSetNavigationOptions("Login", false);

  const handlePressSubmit = async () => {
    try {
      setLoading(true);

      const data = await handleSubmit();
      if (data.login.ok) {
          setToken(data.login.user?.id);
          navigation.goBack();
      }
      else {
          useAlert({titleError: data.login.error, errorMessage: "Password or username incorrect"});
      }

      setLoading(false);
    } 
    catch (error) {
      useAlert({titleError: "Oh snap! You got an error!", errorMessage: error});
    }
  };
  
  return <Layout loading={loading} state={state} handleChange={handleChange} navigation={navigation} handlePressSubmit={handlePressSubmit} />;
}