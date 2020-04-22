import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import logo from "./logo.svg";
import { Formik } from "formik";

// TODO replace custom state with Formik
// TODO use formik for validation
// TODO use validation with material-ui to show HelperText

const RegisterForm = () => {
  return (
    <Container maxWidth="sm">
      <Logo src={logo} />
      <Typography variant="h5">
        Welcome to our platform, please register!
      </Typography>
      <br />
      <Formik
        initialValues={{ fullname: 'Diego', age: '', email: '', password: '', repeatPassword: ''}}
        validate = { values => {
          const errors = {};
          if(!values.email){
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';  
          }
          return errors;
        }}
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
              variant="filled"
              id="fullname"
              label="Fullname"
              value={values.fullname}
              onChange={handleChange("fullname")}
            />
            <br />
            <TextField
              variant="filled"
              id="age"
              label="Age"
              value={values.age}
              onChange={handleChange("age")}
            />
            <br />
            <TextField
              required
              error={errors.email && touched.email && errors.email}
              helperText={errors.email && touched.email && errors.email ? errors.email : ' '}
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
            <TextField
              variant="filled"
              id="repeatPassword"
              label="Repeat password"
              type="repeatPassword"
              value={values.repeatPassword}
              onChange={handleChange("repeatPassword")}
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

export default RegisterForm;
