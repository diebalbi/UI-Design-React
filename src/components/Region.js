import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Alert from 'react-bootstrap/Alert'

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

    if (loading) return (
        <Row className="justify-content-md-center">
            <Spinner animation="border" />
        </Row>
    )
    if (error) return (
        <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                {error.message}
            </p>
        </Alert>
    )
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