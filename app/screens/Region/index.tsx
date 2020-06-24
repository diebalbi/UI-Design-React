import React from "react";
import { Layout } from "./Layout";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loading } from "../Loading";

const GET_REGIONS = gql`
  {
    regions {
      id,
      name,
      places {
        id,
        name,
        mainImageUrl
      }
    }
  }`
;

export const Region = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_REGIONS);

  useSetNavigationOptions("Region", true);

  if( loading ) {
    return <Loading />
  } 
  else if ( error ) {
    console.log(error);
  }
  else {
    return <Layout navigation={navigation} regions={data.regions}/>
  }
};
