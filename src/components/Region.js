import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const GET_PLACES = gql`
    query PlacesByRegion($regionId: ID!) {
        placesByRegion(regionId: $regionId) {
            id,
            name
        }
    }
`;

const Region = ({ regionId, name }) => {
    const { loading, error, data } = useQuery(GET_PLACES, { variables: { regionId } });

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
                {data.placesByRegion.map(({ id, name }) => (
                    <div>
                        <p> {id} : {name} </p>
                    </div>
                ))}
                <br />
                <Divider />
                <br />
            </Container>
        </div>
    );
}
export default Region;