import { gql } from "apollo-boost";

export const GET_TRIPS_PLACE = gql`
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