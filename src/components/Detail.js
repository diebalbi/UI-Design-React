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
import { Alert } from '@material-ui/lab';

import {
    Link,
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
            images {
                id,
                url
            },
            activities {
                id,
                name,
                price
            },
            reviews {
                id,
                rating,
                description,
                userId,
                user {
                  fullname
                }
            }
        }
    }
`;

function getStars(data) {
    var stars = 0;
    var count = 0;
    var reviews = data.data.place.reviews;
    reviews.forEach(function (value, i) {
        stars += value.rating;
        count += 1;
    });
    return stars / count;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

const Detail = () => {
    let { placeId } = useParams();
    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_PLACE, { variables: { placeId } });
    const userId = localStorage.getItem('userId') != null;

    if (loading) return (
        <Row className="justify-content-md-center">
            <Spinner animation="border" />
        </Row>
    )
    if (error) return (
        <Alert severity="warning">Oh snap! You got an error!
            <p>{error.message}</p>
        </Alert>
    )

    return (
        <div>
            <Container maxWidth="md">
                <br />
                <Typography variant="h3">
                    {data.place.name}
                </Typography>
                <div className={classes.root}>
                    <Rating name="size-small" defaultValue={getStars({ data })} readOnly />
                </div>
                <br />
                <Carousel>
                    {data.place.images.map(({ id, url }) => (
                        <div key={id}>
                            {/* <img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$" alt="" /> */}
                            <img src={url} alt="carousel image"/>
                        </div>
                    ))}
                </Carousel>
                {(data.place.images).length === 0 &&
                    <div>
                        <Alert severity="warning">
                            <p>
                                There are no photos for this city yet...
                            </p>
                        </Alert>
                        <br />
                    </div>
                }
                <Divider />
                <br />
                <Typography variant="h4">
                    Description
                </Typography>
                <br />
                <Typography variant="body1">
                    {data.place.description}
                </Typography>
                <br />
                <br />
                <Divider />
                <br />
                <Typography variant="h4">
                    Activities
                </Typography>
                <Activities activities={data.place.activities} />
                <br />
                <Divider />
                <br />
                <Typography variant="h4">
                    Comments
                </Typography>
                <br />
                {data.place.reviews &&
                    data.place.reviews.map(({ id, user, rating, description }) => (
                        <div key={id}>
                            <GivenReview name={user.fullname} rating={rating} description={description} />
                        </div>
                    ))
                }
                {(data.place.reviews).length === 0 &&
                    <Alert severity="warning">
                        <p>
                            There are no comments for this city, send us your review! ;)
                        </p>
                    </Alert>
                }
                <br />
                <Divider />
                <br />
                {userId !== '' ?
                    <AddReview />
                    : <Alert severity="warning">
                        <p>
                            <Link to="/login">Sign in</Link> to send your review too!
                        </p>
                    </Alert>
                }
                <br />
                <br />
            </Container>
        </div>
    );
}
export default Detail;