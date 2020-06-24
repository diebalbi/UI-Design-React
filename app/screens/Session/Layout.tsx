import React from "react";
import { Button } from 'react-native-paper';
import { View } from "react-native";

export const Layout = ({handleLogin, handleLogout, token}) => (
    <View>
        { token ? 
            <Button color="white" style={{backgroundColor: "lightcoral", marginRight: 10}} onPress={handleLogout}> Logout </Button> 
            :
            <Button color="white" style={{backgroundColor: "rgb(25, 118, 210)", marginRight: 10}} onPress={handleLogin}> Login </Button> 
        }
    </View>
);
