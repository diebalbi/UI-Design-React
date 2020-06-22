import * as React from "react";
import { Layout } from './layout';
import { useRoute } from "@react-navigation/native";
import { useSetNavigationOptions } from "./hooks/useSetNavigationOptions";

export const PlaceDetail = () => {
    const route:any = useRoute();
    const placeId = route.params.id;
    const title = route.params.name;
    useSetNavigationOptions(title);
    return <Layout placeId={placeId}/>;
}