import * as React from "react";
import styled from "styled-components/native";
import { TextInput, Button, Title, HelperText } from "react-native-paper";
import logo from '../../assets/logo.png';
import { ActivityIndicator } from "react-native";

export const Layout = ({ loading, state, handleChange, handlePressSubmit, navigation }) => (
    <Container>
        <LogoContaier>
            <Logo source={logo} resizeMode={"contain"} />
        </LogoContaier>
        <Title>Welcome to our platform, please login!</Title>
        <FormContainer>
            <TextInput
                editable={!loading}
                mode="flat"
                label="Email"
                value={state.email}
                onChangeText={handleChange("email")}
            />
            <TextInput
                editable={!loading}
                mode="flat"
                label="Password"
                secureTextEntry={true}
                value={state.password}
                onChangeText={handleChange("password")}
            />
            <Button mode="contained" style={{backgroundColor: "rgb(25, 118, 210)"}} onPress={handlePressSubmit} disabled={loading}>
                LOGIN
            </Button>
            <Button color="rgb(25, 118, 210)" onPress={() => navigation.push("Register")} disabled={loading}>
                Go To register
            </Button>
            <ActivityIndicator size="large" color="rgb(25, 118, 210)" animating={loading} />
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
