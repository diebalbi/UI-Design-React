import { gql } from "apollo-boost";

export const GET_TRIPS = gql`
    query GetTripForUser($userId: ID!) {
        trips(userId: $userId) {
            id,
            name,
            userId
        }
    }
`;