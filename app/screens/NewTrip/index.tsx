import React from 'react';
import { Layout } from './Layout';
import { useAlert } from '../../hooks/useAlert';
import { useSetNavigationOptions } from '../../hooks/useSetNavigationOptions';
import { useAuth } from '../../hooks/useAuth';
import { useTrip } from './hooks/tripHook';

export const NewTrip = ({ navigation }) => {
    useSetNavigationOptions("New Trip", false);
    const { token } = useAuth();
    const [loading, setLoading] = React.useState(false);
    const { state, handleChange, handleSubmit } = useTrip({userId: token})

    const handleAdd = async () => {
        setLoading(true);

        const data = await handleSubmit();
     
        if(data.registerTrip.ok) {
            navigation.goBack();
        }
        else {
            useAlert({titleError: "", errorMessage: data.registerTrip.error})
        }

        setLoading(false);
    }

    return <Layout loading={loading} handleChange={handleChange} state={state} handleAdd={handleAdd} />
}