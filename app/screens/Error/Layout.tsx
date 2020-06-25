import React from "react";
import { Title, Paragraph } from 'react-native-paper';
import { View } from "react-native";

export const Layout = ({errorMessage}) => (
    <View style={{marginVertical: 10, alignContent: "center", alignItems: "center"}}>
        <Title style={{color: "red"}}> Upps, that was not expected </Title>
        <Paragraph style={{marginTop: 10}}> {errorMessage} </Paragraph>
    </View>
);
