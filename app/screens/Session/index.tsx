import React from 'react';
import { Layout } from './Layout';
import { useAuth } from '../../hooks/useAuth';

export const Session = ({navigation}) => {
    const { token, setToken } = useAuth();

    const handleLogout = async () => {
        setToken("");
    };

    const handleLogin = () => {
        navigation.push("Login")
    }

    return <Layout handleLogout={handleLogout} token={token} handleLogin={handleLogin} />
}