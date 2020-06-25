import { gql } from "apollo-boost";

export const TRIP_PLACE_MUTATION = gql`
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