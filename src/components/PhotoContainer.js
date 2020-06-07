import React, { Component } from 'react';
import Photo from "./Photo";

const PhotoContainer = ({photos}) => {

    const displayPhotos = () => {
        return photos.map(photo => {
            return <Photo url={photo.url} />;
        });
    };

    return (
        <section>
            {displayPhotos()}
        </section>
    );
};

export default PhotoContainer;