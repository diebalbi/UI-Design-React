import React from 'react';
import { Layout } from './Layout';
import { useQuery } from '@apollo/react-hooks';
import { useRoute } from '@react-navigation/native';
import { gql } from 'apollo-boost';
import { useAlert } from '../../hooks/useAlert';
import { Loading } from '../Loading';
import { useSetNavigationOptions } from '../../hooks/useSetNavigationOptions';
import { useAuth } from '../../hooks/useAuth';

const GET_TRIPS_PLACE = gql`
    query GetTripPlaces($tripId: ID!) {
        tripsPlaces(tripId: $tripId) {
            id,
            placeId,
            tripId,
            place {
                id,
                name,
                mainImageUrl
            }
        }
    }
`;

export const TripDetail = ({ navigation }) => {
    const { token } = useAuth();
    const route:any = useRoute();
    const tripId = route.params.tripId;
    useSetNavigationOptions("Trip Detail", true);

    const { loading, error, data } = useQuery(GET_TRIPS_PLACE, {
        variables: { tripId }
    });

    if(!token) {
        navigation.goBack();
    }

    if( loading ) {
        return <Loading />
    }
    else if ( error ) {
        useAlert({titleError: "Oh snap! You got an error!", errorMessage: error});
    }
    else {
        return <Layout tripsPlaces={data.tripsPlaces} navigation={navigation} />
    }
}