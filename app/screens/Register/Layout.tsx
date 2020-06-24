import * as React from "react";
import styled from "styled-components/native";
import { TextInput, Button, Title } from "react-native-paper";
import logo from '../../assets/logo.png';

export const Layout = ({ state, handleChange, handlePressSubmit }) => (
  <Container>
    <LogoContaier>
        <Logo source={logo} resizeMode={"contain"} />
    </LogoContaier>
    <Title>Welcome to our platform, please register!</Title>
    <FormContainer>
      <TextInput
        mode="flat"
        label="Fullname"
        value={state.fullname}
        onChangeText={(text) => handleChange("fullname")(text)}
      />
      <TextInput
        mode="flat"
        label="Email"
        value={state.email}
        onChangeText={(text) => handleChange("email")(text)}
      />
      <TextInput
        mode="flat"
        label="Password"
        secureTextEntry={true}
        value={state.password}
        onChangeText={(text) => handleChange("password")(text)}
      />
      <Button mode="contained" style={{backgroundColor: "rgb(25, 118, 210)"}} onPress={handlePressSubmit}>
        REGISTER
      </Button>
    </FormContainer>
  </Container>
)

const FormContainer = styled.View`
    flex: 2;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0px 20px;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const LogoContaier = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;