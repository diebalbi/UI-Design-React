import * as React from 'react';
import { TextInput, Button, Title } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';
import styled from "styled-components/native";
import { Rating } from "react-native-ratings";

export const Layout = ({ state, handleChange, handleAdd, loading }) => (
    <Container>
        <Title> New Review </Title>
        <FormContainer>
            <TextInput
                editable={!loading}
                mode="flat"
                placeholder="Description"
                value={state.description}
                onChangeText={handleChange("description")}
                style={{marginVertical: 10}}
                multiline={true}
            />
            <Rating 
                type='custom'
                ratingCount={5} 
                startingValue={state.rating} 
                imageSize={20} 
                ratingColor='#3498db'
                onFinishRating={handleChange("rating")}
            />
            <Button mode="contained" style={{backgroundColor: "rgb(25, 118, 210)", marginTop: 10}} onPress={handleAdd} disabled={loading}>
                Add Review
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