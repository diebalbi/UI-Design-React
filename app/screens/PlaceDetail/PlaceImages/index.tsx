import React from 'react';
import { Layout } from './Layout';
import { Image } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';

export const PlaceImages = ({ navigation, images }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const {token} = useAuth();

    const renderItem = ({item}) => {
        return (
            <Image source={{uri: item.url}} style={{height: 200, width: 300}} />
        );
    }

    return <Layout navigation={navigation} activeIndex={activeIndex} setActiveIndex={setActiveIndex} images={images} renderItem={renderItem} token={token} />
}