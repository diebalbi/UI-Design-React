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

export default function Detail() {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Typography variant="h7">
                Diego Fufu
            </Typography>
            <div className={classes.root}>
                <Rating name="size-small" defaultValue={2} size="small" />
            </div>
            <Typography variant="h8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
            </Typography>
            <br />
        </Container>
    );
}