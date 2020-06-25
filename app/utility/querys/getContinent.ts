import { gql } from "apollo-boost";

export const GET_CONTINENTS = gql`
  {
    continents {
      id,
      name,
      places {
        id,
        name,
        mainImageUrl
      }
    }
  }
`;