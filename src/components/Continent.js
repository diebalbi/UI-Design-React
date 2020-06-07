import React from 'react';
import { Container, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import PhotoContainer from "./PhotoContainer";

const GET_PLACES = gql`
    query PlacesByContinent($continentId: ID!) {
        placesByContinent(continentId: $continentId) {
            id,
            name
        }
    }
`;

const GET_PLACES_IMAGES = gql`
    query PlacesImages($placeId: ID!) {
        image(placeId: $placeId) {
            id,
            url
        }
    }
`;

const Continent = ({ continentId, name }) => {
    const { loading, error, data } = useQuery(GET_PLACES, { variables: { continentId } });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <Container maxWidth="md">
                <br />
                <Typography variant="h5">
                    {name}
                </Typography>
                <br />
                {data.placesByContinent.map(({ id, name }) => (
                    {/* <PhotoContainer photos={images} /> */}
                ))}
                <br />
                <Divider />
                <br />
            </Container>
        </div>
    );
}

export default Continent;