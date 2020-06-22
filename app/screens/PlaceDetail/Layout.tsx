import React from "react";
import { View, Text } from "react-native";

export const Layout = ({ placeId }) => (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text> {placeId} </Text>
    </View>
);