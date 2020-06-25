import { gql } from "apollo-boost";

export const TRIP_MUTATION = gql`
mutation RegisterTrip($input: RegisterTrip!) {
    registerTrip(input: $input)
    {
        ok,
        error,
        trip {
            id,
            name,
            userId
        }
    }
}
`;