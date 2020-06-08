import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Welcome = ({name}) => {
    return (
        <div>
            <Alert variant="success">
                Welcome!, you are logged in as {name}.
            </Alert>
        </div>
    );
}
export default Welcome;