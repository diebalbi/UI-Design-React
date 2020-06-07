import React from 'react';

const Photo = ({url}) => {
    return (
        <section>
            <img src={url} alt="Place photo"/>
        </section>
    )
}

export default Photo;