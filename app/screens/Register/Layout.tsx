import * as React from "react";
import styled from "styled-components/native";
import { TextInput, Button, Title } from "react-native-paper";

export const Layout = ({ state, handleChange, handlePressSubmit }) => (
  <Container>
    {/* <Logo source={logo} /> */}
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
      <Button mode="contained" onPress={handlePressSubmit}>
        REGISTER
      </Button>
    </FormContainer>
  </Container>
)

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px 20px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
`;