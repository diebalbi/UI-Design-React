import React from 'react';
import { Layout } from "./Layout"
import { useSetNavigationOptions } from "../../../../hooks/useSetNavigationOptions";

export const UploadImage = () => {
    useSetNavigationOptions("Upload Image", false);

    return <Layout />
}