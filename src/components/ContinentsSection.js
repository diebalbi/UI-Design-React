import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
// import Continent from "./Continent";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

const GET_CONTINENTS = gql`
    {
        continents {
            id,
            name
        }
    }
  `;

const ContinentsSection = () => {
    const { loading, error, data } = useQuery(GET_CONTINENTS);

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
            <br />
            <Typography variant="h4" align="center">
                Places by Continents
            </Typography>
            {/* {data.continents.map(({ id, name }) => (
                <Continent continentId={id} name={name} />
            ))} */}
        </div>
    );
}
export default ContinentsSection;