import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Region from "./Region";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

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

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

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