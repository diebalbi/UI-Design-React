import React from 'react';
import { Layout } from './Layout';
import { useAuth } from '../../../../hooks/useAuth';
import { useReview } from './hooks/useReview';
import { useSetNavigationOptions } from '../../../../hooks/useSetNavigationOptions';
import { useRoute } from '@react-navigation/native';

export const AddReview = ({ navigation }) => {
    const route:any = useRoute();
    const placeId = route.params.placeId;

    const [loading, setLoading] = React.useState(false);
    const { token } = useAuth();
    const { state, handleChange, handleSubmit } = useReview({placeId: placeId, userId: token})
    useSetNavigationOptions("Add Review", false);
    
    const handleAdd =async () => {
        setLoading(true);

        const data = await handleSubmit();
        console.log("Data", data);
        if(data.registerReview) {
            navigation.goBack();
        }

        setLoading(false);
    }

    return <Layout state={state} handleChange={handleChange} handleAdd={handleAdd} loading={loading} />
}