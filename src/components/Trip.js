import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { Alert } from '@material-ui/lab';
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Divider from '@material-ui/core/Divider';
import Card from 'react-bootstrap/Card'
import styled from "styled-components";
import {
    Switch,
    Link,
    useParams
} from "react-router-dom";

const GET_TRIP_PLACES = gql`
    query GetTripPlaces ($tripId: ID!) {
        tripsPlaces(tripId: $tripId) {
            id,
            placeId,
            tripId,
            place {
                id,
                name,
                mainImageUrl
            }
        }
    }
`;

const CustomCard = styled.div`
  object-fit: contain;
  text-align: center;
  img {
    text-align: -webkit-center;
    width: 100%;
    max-width: 300px;
  }
`;

function getPlaces(data) {
    var placesNames = "";
    var places = data.data.tripsPlaces;
    places.forEach(function (value, i) {
        placesNames += ", " + value.place.name;
    });
    placesNames = placesNames.substring(1, placesNames.length);
    return placesNames;
}

const Trip = ({ }) => {
    let { tripId } = useParams();
    const { loading, error, data } = useQuery(GET_TRIP_PLACES, { variables: { tripId } });
    var initialText = "I just created my trip using Omega Travel, my trip includes: "

    if (loading) return (
        <Row className="justify-content-md-center">
            <Spinner animation="border" />
        </Row>
    )
    if (error) return (
        <Alert severity="warning">Oh snap! You got an error!
            <p>{error.message}</p>
        </Alert>
    )

    return (
        <Container maxWidth="md">
            <div style={{ textAlign: "center" }}>
                <br />
                <div>
                    <a class="resp-sharing-button__link" href={"https://twitter.com/intent/tweet/?text= " + initialText + getPlaces({ data }) + "."} target="_blank" rel="noopener" aria-label="">
                        <Typography variant="h5" className="justify-content-md-center">
                            Share your trip on twitter!
                        
                        </Typography>
                    </a>
                </div>
                <br />
                <br />
                <div style={{ textAlign: "center" }}>
                    {data.tripsPlaces.map(({ place }) => (
                        <Switch>
                            <div style={{ display: "inline-flex" }} key={place.id}>
                                <Link to={"/place/" + place.id} style={{ color: '#FFF', textDecoration: 'none' }} >
                                    <CustomCard style={{ padding: "2%" }}>
                                        <Card>
                                            <img src={place.mainImageUrl} alt="main continent" />
                                            <Card.Body style={{ backgroundColor: "#1976d2" }} >
                                                <Card.Title>{place.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </CustomCard>
                                </Link>
                            </div>
                        </Switch>
                    ))}
                </div>
                <br />
            </div>
        </Container>
    );
}

export default Trip;