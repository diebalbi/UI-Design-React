import { gql } from "apollo-boost";

export const REGISTER_MUTATION = gql`
    mutation register($input: RegisterInput!) {
    register(input: $input) {
        id
        fullname
        email
        token
    }
    }
`;