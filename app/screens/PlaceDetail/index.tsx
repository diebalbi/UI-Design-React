import * as React from "react";
import { Layout } from './Layout';
import { useRoute } from "@react-navigation/native";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";
import { Loading } from "../Loading";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_PLACE = gql`
    query getPlace($placeId: ID!) {
        place(id: $placeId) {
            id,
            name,
            description,
            continentId,
            regionId,
            images {
                id,
                url
            },
            activities {
                id,
                price,
                name
            },
            reviews {
                id,
                description,
                rating,
                user{
                id,
                fullname
                }
            }
        }
    }
`

export const PlaceDetail = ({ navigation }) => {
    const route:any = useRoute();
    const placeId = route.params.id;
    const title = route.params.name;
    useSetNavigationOptions(title, true);

    const { loading, error, data } = useQuery(GET_PLACE,
    {
        variables: { placeId }
    });

    if( loading ) {
        return <Loading />
    } 
    else if ( error ) {
        console.log(error);
    }
    else {
        return <Layout navigation={navigation} place={data.place}/>;
    }
}