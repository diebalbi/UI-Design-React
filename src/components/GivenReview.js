import * as React from "react";
import Rating from '@material-ui/lab/Rating';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

const Review = ({name, rating, description}) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Typography variant="h7">
                {name}
            </Typography>
            <div className={classes.root}>
                <Rating name="size-small" defaultValue={rating} size="small" />
            </div>
            <Typography variant="h8">
                {description}
                <br />
            </Typography>
            <br />
        </Container>
    );
}

export default Review;