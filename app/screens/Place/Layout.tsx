import React from "react";
import { TouchableOpacity, ImageBackground } from "react-native";
import { Text } from "react-native-paper";

export const Layout = ({ name, mainImageUrl, placeId, navigation }) => (
    <TouchableOpacity style={{height: 200, width: 300, marginHorizontal: 10, marginVertical: 5}} onPress={() => navigation.push("PlaceDetail", {id:placeId, name:name})}>  
        <ImageBackground source={{uri: mainImageUrl}} style={{height: 200, width: 300}} >
        <Text> {name} </Text>
        </ImageBackground>
    </TouchableOpacity>
)