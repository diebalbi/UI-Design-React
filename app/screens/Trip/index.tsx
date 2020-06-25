import React from "react";
import { useSetNavigationOptions } from '../../hooks/useSetNavigationOptions';
import { useAuth } from '../../hooks/useAuth';
import { Layout } from './Layout';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loading } from "../Loading";
import { useAlert } from "../../hooks/useAlert";
import { useRoute } from "@react-navigation/native";

const GET_TRIPS = gql`
    query GetTripForUser($userId: ID!) {
        trips(userId: $userId) {
            id,
            name,
            userId
        }
    }
`;

const TRIP_PLACE_MUTATION = gql`
    mutation registerTripPlace($input: RegisterTripPlace!)  {
        registerTripPlace(input: $input)
        {
            ok,
            error,
             tripPlace {
                id,
                placeId,
                tripId
            }
        }
    }
`;

export const Trip = ({ navigation }) => {
    const route:any = useRoute();
    const params = route.params;
    const comeFromRoute = params;

    const { token } = useAuth();
    const userId = token !== null ? token : "";
    const { loading, error, data } = useQuery(GET_TRIPS, {
        variables: { userId }
    });

    const [loadingData, setLoadingData] = React.useState(false);
    const [addTripPlace] = useMutation(TRIP_PLACE_MUTATION);

    useSetNavigationOptions("Trip", true);

    const handlePress = async (tripId) => {
        if(!comeFromRoute) {
            navigation.push("TripDetail", {tripId: tripId})
        }
        else {
            setLoadingData(true);

            const inputData = {placeId: params.placeId, tripId: tripId };
            const result = await addTripPlace({
                variables: {
                    input: inputData
                },
            }).then(({ data }) => {
                return data.registerTripPlace;
            });
            
            console.log(result);
            setLoadingData(false);
            if (result.ok) {
                navigation.goBack();
            }
            else {
                useAlert({titleError: "Cant select that trip!", errorMessage: result.error});
            }
        }
    }

    if( loading ) {
        return <Loading />
    }
    else if ( error ) {
        useAlert({titleError: "Oh snap! You got an error!", errorMessage: error});
    }
    else {
        return <Layout navigation={navigation} loadingData={loadingData} comeFromRoute={comeFromRoute} handlePress={handlePress} token={token} data={data} />
    }  
}