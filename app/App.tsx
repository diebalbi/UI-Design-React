import React from "react";
import { AsyncStorage } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider } from "@apollo/react-hooks";
import { MaterialIcons, Fontisto } from '@expo/vector-icons'; 
import client from "./client";
import { ContinentStack } from "./screens/Continent/StackNavigator";
import { RegionStack } from "./screens/Region/StackNavigator";

const Tab = createBottomTabNavigator();

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
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  if (route.name === 'Continent') {
                    return <Fontisto name="world-o" size={size} color={color} />
                  } else {
                    return <MaterialIcons name="place" size={size} color={color} />;
                  }
                },
              })}
            >
              <Tab.Screen name="Continent" component={ContinentStack} />
              <Tab.Screen name="Region" component={RegionStack} />
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ApolloProvider>
    </AuthContext.Provider>
  );
}