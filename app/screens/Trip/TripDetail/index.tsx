import React from 'react';
import { Layout } from '../../Place/Layout';
import { useQuery } from '@apollo/react-hooks';
import { useRoute } from '@react-navigation/native';
import { gql } from 'apollo-boost';

const GET_TRIPS_PLACE = gql`
    query GetTripForUser($userId: ID!) {
        trips(userId: $userId) {
            id,
            name,
            userId
        }
    }
`;

export const TripDetail = () => {
    const route:any = useRoute();
    const tripIp = route.params.tripId;

    const { loading, error, data } = useQuery(GET_TRIPS_PLACE, {
        variables: tripIp
    });

    return <Layout />
}