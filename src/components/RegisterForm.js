import * as React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const REGISTER_MUTATION = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      id
      fullname
      email
    }
  }
`;

const USERS_QUERY = gql`
  query Users {
    users {
      id
      fullname
      email
    }
  }
`

const validations = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required')
})

const RegisterForm = () => {
  const [register] = useMutation(REGISTER_MUTATION);
  const { data, loading, error } = useQuery(USERS_QUERY);

  return (
    <Container maxWidth="sm">
      <Logo src={logo} />
      <Typography variant="h5">
        Welcome to our platform, please register!
      </Typography>
      <br />
      <Formik
        initialValues={{ fullname: '', email: '', password: '', repeatPassword: ''}}
        validationSchema={validations}
        onSubmit = {( {repeatPassword, ...values}, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            
            register({
              variables: {
                input: values
              },
            }).then((result) => {
              console.log("Result", { result });
            });

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
              error={errors.fullname && touched.fullname}
              helperText={errors.fullname && touched.fullname ? errors.fullname : ' '}
              variant="filled"
              id="fullname"
              label="Fullname"
              value={values.fullname}
              onChange={handleChange("fullname")}
            />
            <br />
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
              error={errors.password && touched.password}
              helperText={errors.password && touched.password ? errors.password : ' '}
              variant="filled"
              id="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
            />
            <br />
            <TextField
              error={errors.repeatPassword && touched.repeatPassword}
              helperText={errors.repeatPassword && touched.repeatPassword ? errors.repeatPassword : ' '}
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
              REGISTER
            </Button>
          </FormContainer>
          {JSON.stringify(data)}
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
