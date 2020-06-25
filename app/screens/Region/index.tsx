import React from "react";
import { Layout } from "./Layout";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";
import { useQuery } from "@apollo/react-hooks";
import { Loading } from "../Loading";
import { GET_REGIONS } from "../../utility/querys/getRegion";

export const Region = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_REGIONS);

  useSetNavigationOptions("Region", true);

  if( loading ) {
    return <Loading />
  } 
  else if ( error ) {
      navigation.push("Error", {error: error});
  }
  else {
    return <Layout navigation={navigation} regions={data.regions}/>
  }
};
