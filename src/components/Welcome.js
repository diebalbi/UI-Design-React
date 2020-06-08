import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Welcome = ({name}) => {
    const userId = localStorage.getItem('userId');
    if(userId) return (
        <div>
            <Alert variant="success">
                Welcome!, you are logged in as {name}.
            </Alert>
        </div>
    );
    return(
        <div>
            <Alert variant="warning">
                You are not logged in. Please login to see our full potential ;)
            </Alert>
        </div>
    );
}
export default Welcome;