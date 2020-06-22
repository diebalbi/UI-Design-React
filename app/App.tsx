import React from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApolloProvider } from "@apollo/react-hooks";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { Home } from "./screens/Home";
import client from "./client";
import { PlaceDetail } from "./screens/PlaceDetail";
import { Place } from "./screens/Place";

const RootStack = createStackNavigator();

export const AuthContext = React.createContext({
  token: "",
  setToken: (x: string) => {
    console.log("X", x);
  },
});

export default function App() {
  const [isReady, setReady] = React.useState(false);
  const [token, setToken] = React.useState<string>("");

  React.useEffect(() => {
    AsyncStorage.getItem("token")
      .then((token) => {
        if (token) setToken(token);
      })
      .finally(() => setReady(true));
  }, []);

  React.useEffect(() => {
    AsyncStorage.getItem("token")
      .then((storedToken) => {
        if (storedToken !== token) {
          AsyncStorage.setItem("token", token);
        }
      });
  }, [token]);

  if (!isReady) return null;
  
  //const initialRouteName = token ? "Home" : "Login";
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: (x) => {
          setToken(x);
        },
      }}
    >
      <ApolloProvider client={client}>
        <PaperProvider>
          <NavigationContainer>
            <RootStack.Navigator initialRouteName={"Home"}>
              {/* {!token ? (
                <>
                  <RootStack.Screen 
                    name="Login" 
                    component={Login} 
                  />
                  <RootStack.Screen
                    name="Register"
                    component={Register}
                  />
                </>
              ) : ( */}
                <>
                  <RootStack.Screen name="Home" component={Home} />
                  <RootStack.Screen name="PlaceDetail" component={PlaceDetail} />
                  <RootStack.Screen name="Place" component={Place} />
                </>
              {/* )} */}
            </RootStack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
