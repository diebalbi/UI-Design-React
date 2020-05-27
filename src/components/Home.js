import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Continent from "./Continent";
import Region from "./Region";

export default function Home() {

    return (
        <Container maxWidth="md">
            <Continent />
            <Continent />
            <Region />
            <Region />
        </Container>
    );
}
