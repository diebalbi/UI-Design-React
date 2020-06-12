import React from 'react';
import { Container, Typography } from "@material-ui/core";
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
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const GET_PLACE = gql`
    query GetPlace($placeId: ID!) {
        place(id: $placeId) {
            id,
            name,
            description,
            continentId,
            regionId,
        }
    }
`;

// rating,
// images {url},
// activities {name, price}
// reviews {name, rating, description}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

function Detail() {
    let { placeId } = useParams();
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_PLACE, { variables: { placeId } });

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
            <Container maxWidth="md">
                {/* <Typography variant="h4">
                    {data.place.name}
                </Typography>

                <div className={classes.root}>
                    <Rating name="size-small" defaultValue={data.place.rating} size="small" />
                </div>

                <Carousel>
                    {data.place.images.map(({ url }) => (
                        <div>
                        <img src={url} />
                    </div>
                    ))}
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
                <Activities activities={data.place.activities} />

                <Typography variant="h5">
                    Comments
                </Typography>
                <br />

                {data.place.reviews.map(({ name, rating, description }) => (
                    <div>
                        <GivenReview name={name} rating={rating} description={description} />
                    </div>
                ))}
                <br />
                <Divider />
                <br />
                <AddReview />
                <br /> */}
            </Container>
        </div>
    );
}
export default Detail;