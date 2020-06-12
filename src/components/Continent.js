import React from 'react';
import { Container, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import PhotoContainer from "./PhotoContainer";
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Detail from "./Detail";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

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
    let match = useRouteMatch();
    const { loading, error, data } = useQuery(GET_PLACES, { variables: { continentId } });

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
                <Switch>
                    {data.placesByContinent.map(({ id, name }) => (
                        /*  <PhotoContainer photos={images} />  */
                        <Route path={`${match.path}/:placeId`}>
                            <Detail />
                        </Route>
                    ))}
                </Switch>
                <br />
                <Divider />
                <br />
            </Container>
        </div>
    );
}

export default Continent;