import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const Activities = ({ activities }) => {
    const classes = useStyles();
    if (activities.length == 0) {
        return (
            <div>
                <Typography variant="h5">
                    Activities
                </Typography>
                <br />
                <Alert severity="warning">
                    <p>
                        There are no activities for this city
                    </p>
                </Alert>
            </div>
        );
    }
    return (
        <Container maxWidth="md">
            <Typography variant="h5">
                Activities
            </Typography>
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Name</StyledTableCell>
                            <StyledTableCell align="right">Price&nbsp;($USD)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activities.map((activity) => (
                            <StyledTableRow key={activity.name}>
                                <StyledTableCell component="th" scope="row">
                                    {activity.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{activity.price}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <br />
        </Container>
    );
}

export default Activities;