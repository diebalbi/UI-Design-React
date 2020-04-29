import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import logo from "./logo.svg";
import { Formik } from "formik";
import * as Yup from 'yup';

const validations = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Password is required')
})

const LoginForm = () => {
  return (
    <Container maxWidth="sm">
      <Logo src={logo} />
      <Typography variant="h5">
        Welcome to our platform, please login!
      </Typography>
      <br />
      <Formik
        initialValues={{ email: '', password: ''}}
          validationSchema={validations}
          onSubmit = {(values, { setSubmitting}) => {
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
              <FormContainer>
                <TextField
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ' '}
                  variant="filled"
                  id="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
                <br />
                <TextField
                  variant="filled"
                  id="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange("password")}
                />
                <br />
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  LOGIN
                </Button>
              </FormContainer>
            </form>
        )}
      </Formik>
    </Container>
  );
};

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LoginForm;
