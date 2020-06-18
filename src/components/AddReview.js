import * as React from "react";
import styled from "styled-components";
import { Typography, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import Rating from '@material-ui/lab/Rating';
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const REGISTER_REVIEW = gql`
  mutation registerReview($input: RegisterReview!) {
    registerReview(input: $input) {      
      ok,
      error,
      review {
        userId,
        placeId,
        rating,
        description,
      }
    }
  }
`;

const AddReview = () => {
    const [review, { loading, error }] = useMutation(REGISTER_REVIEW);

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
                                multiline
                                rows={4}
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
