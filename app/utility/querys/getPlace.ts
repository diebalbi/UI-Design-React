import { gql } from "apollo-boost";

export const GET_PLACE = gql`
    query getPlace($placeId: ID!) {
        place(id: $placeId) {
            id,
            name,
            description,
            continentId,
            regionId,
            images {
                id,
                url
            },
            activities {
                id,
                price,
                name
            },
            reviews {
                id,
                description,
                rating,
                user{
                id,
                fullname
                }
            }
        }
    }
`;