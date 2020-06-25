import * as React from "react";
import { Layout } from './Layout';
import { useRoute } from "@react-navigation/native";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";
import { Loading } from "../Loading";
import { useQuery } from "@apollo/react-hooks";
import { useAuth } from "../../hooks/useAuth";
import { useAlert } from "../../hooks/useAlert";
import { GET_PLACE } from "../../utility/querys/getPlace";

export const PlaceDetail = ({ navigation }) => {
    const { token } = useAuth();
    const route:any = useRoute();
    const placeId = route.params.id;
    const title = route.params.name;
    const favorite = route.params.favorite;
    useSetNavigationOptions(title, true);

    const { loading, error, data } = useQuery(GET_PLACE,
    {
        variables: { placeId }
    });

    const handlePress = (placeId) => {
        if(!token) {
           useAlert({titleError: "Sorry you cant do that", errorMessage: "You need to login to add place to trips"}) 
        }
        else {
            navigation.push("Trip", {placeId: placeId});
        }
    }

    if( loading ) {
        return <Loading />
    } 
    else if ( error ) {
        console.log(error);
    }
    else {
        let rating = 0;
        data.place.reviews.map( review => {
            rating += review.rating;
        });
        return <Layout favorite={favorite} handlePress={handlePress} navigation={navigation} place={data.place} rating={rating}/>;
    }
}