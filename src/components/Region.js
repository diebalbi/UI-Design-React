import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
    {
        src: 'https://images.adsttc.com/media/images/582b/5f61/e58e/cea6/1e00/0003/slideshow/Charleston-South_Exterior_Softgrid.jpg?1479237469',
        width: 4,
        height: 3,
        cityId: 1,
    },
    {
        src: 'https://www.eliberico.com/wp-content/uploads/2020/02/london-eye-20-cumplean%CC%83os.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg',
        width: 1,
        height: 1
    }
];

export default function Home() {

    return (
        <Container maxWidth="md">
            <br />
            <Typography variant="h4">
                Sur de Europa
            </Typography>
            <br />
            <Gallery photos={PHOTO_SET} />
            <br />
            <Divider />
            <br />
        </Container>
    );
}