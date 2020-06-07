import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Continent from "./Continent";
import Region from "./Region";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

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

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <br />
            <Typography variant="h4" align="center">
                Places by Continents
            </Typography>
            {data.continents.map(({ id, name }) => (
                <Continent continentId={id} name={name} />
            ))}
        </div>
    );
}
export default ContinentsSection;