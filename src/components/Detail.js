import React from 'react';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import AddReview from "./AddReview";
import GivenReview from "./GivenReview";
import Activities from "./Activities";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const GET_PLACE = gql`
    query GetPlace($placeId: ID!) {
        place(id: $placeId) {
            id,
            name,
            description,
            continentId,
            regionId
        }
    }
`;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

const Detail = ({ placeId }) => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_PLACE, { variables: { placeId } });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <Container maxWidth="md">
                <Typography variant="h4">
                    {data.place.name}
                </Typography>
                <div className={classes.root}>
                    <Rating name="size-small" defaultValue={2} size="small" />
                </div>
                
                <Carousel>
                    <div>
                        <img src="../assets/1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="../assets/2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="../assets/3.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>

                <Divider />
                <br />
                <Typography variant="h5">
                    Description
                </Typography>
                <br />
                <Typography variant="h7">
                    {data.place.description}
                </Typography>
                <br />
                <br />
                <Divider />
                <br />

                <Activities />

                <Typography variant="h5">
                    Comments
            </Typography>
                <br />
                <GivenReview />
                <GivenReview />

                <br />
                <Divider />
                <br />
                <AddReview />
                <br />
            </Container>
        </div>
    );

    return (
        <Container maxWidth="md">
            <Typography variant="h4">
                London
            </Typography>
            <div className={classes.root}>
                <Rating name="size-small" defaultValue={2} size="small" />
            </div>
            <Carousel>
                <div>
                    <img src="../assets/1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../assets/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../assets/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

            <Divider />
            <br />
            <Typography variant="h5">
                Description
            </Typography>
            <br />
            <Typography variant="h7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <br />
            <br />
            <Divider />
            <br />

            <Activities />

            <Typography variant="h5">
                Comments
            </Typography>
            <br />
            <GivenReview />
            <GivenReview />

            <br />
            <Divider />
            <br />
            <AddReview />
            <br />
        </Container>
    );
}

export default Detail;