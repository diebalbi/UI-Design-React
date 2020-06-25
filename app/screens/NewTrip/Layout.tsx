import * as React from 'react';
import { TextInput, Button, Title } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';
import styled from "styled-components/native";

export const Layout = ({ state, handleChange, handleAdd, loading }) => (
    <Container>
        <Title> New Trip </Title>
        <FormContainer>
            <TextInput
                editable={!loading}
                mode="flat"
                label="Name"
                value={state.name}
                onChangeText={handleChange("name")}
                style={{marginVertical: 10}}
            />
            <Button mode="contained" style={{backgroundColor: "rgb(25, 118, 210)", marginTop: 10}} onPress={handleAdd} disabled={loading}>
                Add Trip
            </Button>
            <ActivityIndicator size="large" color="rgb(25, 118, 210)" animating={loading} />
        </FormContainer>
    </Container>
)

const Container = styled.ScrollView`
    flex: 1;
    padding: 0px 20px;
`;

const FormContainer = styled.View`
    flex: 1;
    margin: 10px 0px;
`;