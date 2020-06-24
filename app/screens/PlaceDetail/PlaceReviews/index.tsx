import React from 'react';
import { Layout } from './Layout';
import { useAuth } from '../../../hooks/useAuth';

export const PlaceReviws = ({ navigation, placeId, reviews }) => {
    const {token} = useAuth();

    return <Layout navigation={navigation} reviews={reviews} token={token} placeId={placeId} />
}