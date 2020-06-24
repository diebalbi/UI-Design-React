import React, { useRef, useState, useEffect } from 'react';
import { Layout } from "./Layout"
import { useSetNavigationOptions } from "../../../../hooks/useSetNavigationOptions";
import { Camera } from 'expo-camera';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useRoute } from '@react-navigation/native';

const IMAGE_MUTATION = gql`
    mutation Image($input: RegisterImage!)  {
        registerImage(input: $input)
        {
            id,
            url,
            placeId
        }
    }
`;

export const UploadImage = ({ navigation }) => {
    useSetNavigationOptions("Upload Image", false);
    const route:any = useRoute();
    const placeId = route.params.placeId;
    const [addImag] = useMutation(IMAGE_MUTATION);
    const camRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [permission, setPermission] = useState('');
    const [hasPermission, setHasPermission] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setPermission(status);
          setHasPermission(status === 'granted');
        })();
      }, []);

    const takePicture = async () => {
        if(camRef) {
          const data = await camRef.current.takePictureAsync({quality: 0.1, base64: true});
          setCapturedPhoto(data);
          setOpen(true);
        }
    }

    const saveHandler = async () => {
        setLoading(true);

        const inputData = {placeId: placeId, url: `data:image/png;base64,${capturedPhoto.base64}` };
        const data = await addImag({
            variables: {
                input: inputData
            },
        }).then(({ data }) => {
            return data;
        });

        setLoading(false);
        if (data) {
            navigation.goBack();
        }
    }

    return <Layout 
        camRef={camRef} 
        hasPermission={hasPermission}
        permission={permission}
        open={open} 
        capturedPhoto={capturedPhoto} 
        type={type} 
        setType={setType} 
        takePicture={takePicture} 
        setOpen={setOpen}
        saveHandler={saveHandler}
        loading={loading} />
}