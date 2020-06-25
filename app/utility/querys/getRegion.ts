import { gql } from "apollo-boost";

export const GET_REGIONS = gql`
    {
    regions {
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