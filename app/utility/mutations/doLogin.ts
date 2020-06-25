import { gql } from "apollo-boost";

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {      
      ok,
      error,
      user {
        id,
        fullname,
        email,
        password,
        token
      }
    }
  }
`;