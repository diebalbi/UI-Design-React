import * as React from "react";
import styled from "styled-components/native";
import { TextInput, Button, Title } from "react-native-paper";
import logo from '../../assets/logo.png';

export const Layout = ({ state, handleChange, handlePressSubmit, navigation }) => (
    <Container>
        <LogoContaier>
            <Logo source={logo} resizeMode={"contain"} />
        </LogoContaier>
        <Title>Welcome to our platform, please login!</Title>
        <FormContainer>
            <TextInput
                mode="flat"
                label="Email"
                value={state.email}
                onChangeText={handleChange("email")}
            />
            <TextInput
                mode="flat"
                label="Password"
                secureTextEntry={true}
                value={state.password}
                onChangeText={handleChange("password")}
            />
            <Button mode="contained" onPress={handlePressSubmit}>
                LOGIN
            </Button>
            <Button onPress={() => navigation.push("Register")}>
                Go To register
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

//ver que hacer con el logo
const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const LogoContaier = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
