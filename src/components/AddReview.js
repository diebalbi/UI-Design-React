import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import Rating from '@material-ui/lab/Rating';

const AddReview = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting
            }) => (
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Typography variant="h5">
                            My Review
                        </Typography>
                        <FormContainer>
                            <br />
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                variant="outlined"
                            />
                            <br />
                            <Rating name="size-medium" defaultValue={4} />
                            <br />
                            <Button
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Send Review
                            </Button>
                        </FormContainer>
                    </form>
                )}
        </Formik>
    );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AddReview;
