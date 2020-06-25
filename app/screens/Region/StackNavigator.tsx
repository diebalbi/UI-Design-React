import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Region } from ".";
import { PlaceDetail } from "../PlaceDetail";
import { Login } from "../Login";
import { Register } from "../Register";
import { AddReview } from "../PlaceDetail/PlaceReviews/AddReview";
import { UploadImage } from "../PlaceDetail/PlaceImages/UploadImage";
import { Trip } from "../Trip";
import { Error } from "../Error";

const Stack = createStackNavigator();

export const RegionStack = () => {
    return (
        <Stack.Navigator> 
            <Stack.Screen name="Region" component={Region} />
            <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="AddReview" component={AddReview} />
            <Stack.Screen name="UploadImage" component={UploadImage} />
            <Stack.Screen name="Trip" component={Trip} />
            <Stack.Screen name="Error" component={Error} />
        </Stack.Navigator>
    )
}