import * as React from "react";
import styled from "styled-components";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import logo from "../assets/logo.png";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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
      ok,
      error,
      user {
        id,
        fullname,
        email,
        password 
      }
    }
  }
`;

const LoginForm = () => {
  const [errorState, setErrorState] = React.useState('');
  const [login, { loading, error }] = useMutation(LOGIN);
  var show = true;

  if ({ show }) {
    return (
      <Container maxWidth="sm">
        <Logo src={logo} />
        <Typography variant="h5">
          Welcome to Omega Travel
        </Typography>
        <br />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validations}
          onSubmit={(values, { setSubmitting }) => {
            setErrorState('');

            login({
              variables: {
                input: values
              },
            }).then(({ data }) => {
              if (data.login.ok) {
                localStorage.setItem('userId', data.login.user.id);
                localStorage.setItem('name', data.login.user.fullname);
                show = false;
              }
              else {
                setErrorState(data.login.error);
                setSubmitting(false);
              }
            }).catch((e) => {
              setSubmitting(false);
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
                {loading &&
                  <Row className="justify-content-md-center">
                    <Spinner animation="border" />
                  </Row>}
                {error && <p>Error</p>}
                {errorState && <p>{errorState}</p>}
              </div>
            )}
        </Formik>
        <br />
      </Container>
    );
  }
  return (<></>);
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
