import React from 'react';
import { Container, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import styled from "styled-components";

import {
    Switch,
    Link,
    useRouteMatch,
} from "react-router-dom";

const GET_PLACES = gql`
    query PlacesByRegion($regionId: ID!) {
        placesByRegion(regionId: $regionId) {
            id,
            name,
            mainImageUrl
        }
    }
`;

const CustomCard = styled.div`
  object-fit: contain;
  display: inline-flex;
  text-align: center;
  img {
    text-align: -webkit-center;
    float: left;
    width: 100%;
  }
`;

const Region = ({ regionId, name }) => {
    let match = useRouteMatch();
    const { loading, error, data } = useQuery(GET_PLACES, { variables: { regionId } });

    if (loading) return (
        <Row className="justify-content-md-center">
            <br />
            <Spinner animation="border" />
            <br />
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
            <div>
                <Container maxWidth="md">
                    <br />
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <br />
                    <Switch>
                        {data.placesByRegion.map(({ id, name, mainImageUrl }) => (
                            <div style={{ textAlign: "center" }} key={id}>
                                <Link to={"/place/" + id} style={{ color: '#FFF', textDecoration: 'none' }} >
                                    <CustomCard style={{ padding: "2%" }}>
                                        <Card>
                                            <img src={mainImageUrl} alt="region main photo" />

                                            <Card.Body style={{ backgroundColor: "#1976d2" }} >
                                                <Card.Title>{name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </CustomCard>
                                </Link>
                            </div>
                        ))}
                    </Switch>
                    <br />
                    <Divider />
                    <br />
                </Container>
            </div>
        </div>
    );
}
export default Region;