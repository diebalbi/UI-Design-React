import React from "react";
import { useSetNavigationOptions } from '../../hooks/useSetNavigationOptions';
import { useAuth } from '../../hooks/useAuth';
import { Layout } from './Layout';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loading } from "../Loading";
import { useAlert } from "../../hooks/useAlert";

const GET_TRIPS = gql`
    query GetTripForUser($userId: ID!) {
        trips(userId: $userId) {
            id,
            name,
            userId
        }
    }
`;

export const Trip = ({ navigation }) => {
    const { token } = useAuth();
    const userId = token !== null ? token : "";
    const { loading, error, data } = useQuery(GET_TRIPS, {
        variables: { userId }
    });
    useSetNavigationOptions("Trip", true);

    if( loading ) {
        return <Loading />
    }
    else if ( error ) {
        useAlert({titleError: "Oh snap! You got an error!", errorMessage: error});
    }
    else {
        console.log(data);
        return <Layout navigation={navigation} token={token} data={data} />
    }  
}