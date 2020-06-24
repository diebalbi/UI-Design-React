import React from 'react';
import { Layout } from './Layout';

export const Place = ({ placeId, name, mainImageUrl, navigation }) => {

    return <Layout placeId={placeId} name={name} mainImageUrl={mainImageUrl} navigation={navigation} />
}