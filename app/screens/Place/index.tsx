import React from 'react';
import { Layout } from './Layout';

export const Place = ({ favorite, placeId, name, mainImageUrl, navigation }) => {

    return <Layout favorite={favorite} placeId={placeId} name={name} mainImageUrl={mainImageUrl} navigation={navigation} />
}