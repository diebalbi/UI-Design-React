import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { Alert } from '@material-ui/lab';
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
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


const Trips = ({ }) => {
    var userId = localStorage.getItem('userId');
    const { loading, error, data } = useQuery(GET_TRIPS, { variables: { userId } });

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
                My trips
            </Typography>
            <br />
            {data.trips.map(({ name, id }) => (
                <Switch>
                    <div style={{ textAlign: "center" }}>
                        <Link to={"/trips/" + id} style={{ color: '#FFF', textDecoration: 'none' }} >
                            <ListGroup.Item action>{name}</ListGroup.Item>
                        </Link>
                    </div>
                    <br/>
                </Switch>
            ))}
            <br />
        </Container>
    );
}

export default Trips;