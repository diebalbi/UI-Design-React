import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Region from "./Region";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

const GET_REGIONS = gql`
    {
        regions {
            id,
            name
        }
    }
`;

const RegionsSection = () => {
    const { loading, error, data } = useQuery(GET_REGIONS);

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
                Places by Regions
            </Typography>
            {data.regions.map(({ id, name }) => (
                <Region regionId={id} name={name} />
            ))}
        </div>
    );
}
export default RegionsSection;