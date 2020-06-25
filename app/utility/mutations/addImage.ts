import { gql } from "apollo-boost";

export const IMAGE_MUTATION = gql`
    mutation Image($input: RegisterImage!)  {
        registerImage(input: $input)
        {
            id,
            url,
            placeId
        }
    }
`;