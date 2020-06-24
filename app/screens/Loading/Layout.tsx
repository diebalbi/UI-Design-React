import React from "react";
import { Title } from 'react-native-paper';
import { View, ActivityIndicator } from "react-native";

export const Layout = () => (
    <View style={{marginVertical: 10, alignContent: "center", alignItems: "center"}}>
        <Title> We are working to fetch all data </Title>
        <ActivityIndicator style={{marginTop: 10}} size="large" color="rgb(25, 118, 210)" />
    </View>
);
