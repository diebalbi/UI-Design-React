import React from "react";
import styled from "styled-components/native";
import { Title, Paragraph, Divider } from 'react-native-paper';
import { PlaceImages } from "./PlaceImages";
import { PlaceActivities } from "./PlaceActivities";
import { PlaceReviws } from "./PlaceReviews";
import { Rating } from "react-native-ratings";

const CardSubtitle = ({rating}) => (
    <Rating 
        type='custom'
        ratingCount={5} 
        readonly 
        startingValue={rating} 
        imageSize={20} 
        ratingColor='#3498db' 
    />
)

export const Layout = ({ navigation, place, rating }) => (
    <Container>
        <ViewPlace>
            <PlaceImages navigation={navigation} images={place.images} placeId={place.id} />
        </ViewPlace>
        <Divider />
        <ViewPlace>
            <Title> Description </Title>
            <Paragraph style={{marginLeft: 20}}> {place.description} </Paragraph>
        </ViewPlace>
        <Divider />
        <ViewPlace>
            <PlaceActivities activities={place.activities} />
        </ViewPlace>
        <Divider />
        <ViewPlace>
            <PlaceReviws reviews={place.reviews} placeId={place.id} navigation={navigation}/>
        </ViewPlace>
    </Container>
);

const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
`;

const ViewPlace = styled.View`
    margin: 10px 0px;
`