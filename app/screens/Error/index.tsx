import React from 'react';
import { Layout } from './Layout';
import { useRoute } from '@react-navigation/native';
import { useSetNavigationOptions } from '../../hooks/useSetNavigationOptions';

export const Error = () => {
    const route:any = useRoute();
    const errorMessage = route.params.error;
    useSetNavigationOptions("Error", false);

    return <Layout errorMessage={errorMessage}/>
}