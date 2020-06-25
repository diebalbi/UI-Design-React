import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Trip } from ".";
import { PlaceDetail } from "../PlaceDetail";
import { Login } from "../Login";
import { Register } from "../Register";
import { AddReview } from "../PlaceDetail/PlaceReviews/AddReview";
import { UploadImage } from "../PlaceDetail/PlaceImages/UploadImage";
import { TripDetail } from "../TripDetail";
import { NewTrip } from "../NewTrip";

const Stack = createStackNavigator();

export const TripStack = () => {
    return (
        <Stack.Navigator> 
            <Stack.Screen name="Trip" component={Trip} />
            <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="AddReview" component={AddReview} />
            <Stack.Screen name="UploadImage" component={UploadImage} />
            <Stack.Screen name="TripDetail" component={TripDetail} />
            <Stack.Screen name="NewTrip" component={NewTrip} />
        </Stack.Navigator>
    )
}