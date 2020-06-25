import React from 'react';
import styled from "styled-components/native";
import { Place } from "../Place"
import { Title } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler"

export const Layout = ({ navigation, tripsPlaces }) => (
    <Container>
        <Title> My places </Title>
        <FlatList
            data={tripsPlaces}
            renderItem={ ({ item }) =>
                <Place favorite={false} placeId={item.place.id} name={item.place.name} mainImageUrl={item.place.mainImageUrl} navigation={navigation} />
            }
            keyExtractor={item => item.id}
        />
    </Container>
)

const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 20px;
`;