import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import logo from "../assets/logo.png";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const validations = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Password is required')
})

const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {      
      id,
      fullname
    }
  }
`;

const LoginForm = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);

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
          onSubmit = {(values, { setSubmitting }) => {
            login({ 
                variables: {
                  input: values
                },
              }).then((result) => {
                localStorage.setItem('userId', result.data.login.id);
                const algo = result.data.login;
                const userId = localStorage.getItem('userId');
                console.log("Result", { algo });
                console.log("Localstorage", { userId })
              });

          }}
        >
          {({
            values, errors, touched, handleChange, handleSubmit, isSubmitting
          }) => (
            <div>
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
              {loading && <p>Cargando...</p>}
              {error && <p>Error</p>}
            </div>
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
