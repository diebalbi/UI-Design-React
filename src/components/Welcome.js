import React from 'react';
import { Alert } from '@material-ui/lab';

const Welcome = () => {
    const userId = localStorage.getItem('userId');
    const fullname = localStorage.getItem('name');
    if(userId) return (
        <div>
            <Alert severity="success">
                Welcome!, you are logged in as {fullname}.
            </Alert>
        </div>
    );
    return(
        <div>
            <Alert severity="warning">
                You are not logged in. Please login to see our full potential ;)
            </Alert>
        </div>
    );
}
export default Welcome;