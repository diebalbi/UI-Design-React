import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { Alert } from '@material-ui/lab';
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import { useMutation } from "@apollo/react-hooks";

import {
    Switch,
    Link,
    useParams
} from "react-router-dom";

const GET_TRIPS = gql`
    query trips($userId: ID!) {
        trips(userId: $userId) {
            id,
            name,
            tripPlaces {
                placeId
            }
        }
    }
`;


const REGISTER_TRIP_PLACE = gql`
    mutation registerTripPlace($input: RegisterTripPlace!)  {
        registerTripPlace(input: $input)
        {
            ok,
            error,
            tripPlace {
                id,
                placeId,
                tripId
            }
        }
    }
`;



const PlaceToTrip = () => {

    let { placeId } = useParams();
    var userId = localStorage.getItem('userId');
    const [addTrip] = useMutation(REGISTER_TRIP_PLACE);
    const { loading, error, data } = useQuery(GET_TRIPS, { variables: { userId } });
    const [errorState, setErrorState] = React.useState('');

    const registerMutation = ({ placeId, tripId }) => {
        const values = { placeId: placeId, tripId: tripId };
        addTrip({
            variables: {
                input: values
            },
        }).then(({ data }) => {
            if (data.registerTripPlace.ok) {
                window.history.back();
            }
            else {
                setErrorState(data.registerTripPlace.error);
            }
        }).catch((e) => {
        });
    }

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
            <br />
            <Typography variant="h4" className="justify-content-md-center">
                Select trip
            </Typography>
            <br />
            {data.trips.map(({ name, id }) => (
                <Switch>
                    <div style={{ textAlign: "center" }}>
                        <ListGroup.Item onClick={() => registerMutation({ placeId: placeId, tripId: id })} action>{name}</ListGroup.Item>
                    </div>
                    <br />
                </Switch>
            ))}
            <br />
            {errorState && <p>{errorState}</p>}
        </Container>
    );
}

export default PlaceToTrip;