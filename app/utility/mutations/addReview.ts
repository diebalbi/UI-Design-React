import { gql } from "apollo-boost";

export const REVIEW_MUTATION = gql`
    mutation Review($input: RegisterReview!)  {
        registerReview(input: $input)
        {
            id,
            description,
            rating,
            placeId,
            userId
        }
    }
`;
