import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
    {
        src: 'http://example.com/example/img1.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'http://example.com/example/img2.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'http://example.com/example/img2.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'http://example.com/example/img1.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'http://example.com/example/img2.jpg',
        width: 1,
        height: 1
    }
];

export default function Home() {

    return (
        <Container maxWidth="md">
            <br />
            <Typography variant="h4">
                Region aka Drogobalbi
            </Typography>
            <br />
            <Gallery photos={PHOTO_SET} />
            <br />
            <Divider />
            <br />
        </Container>
    );
}