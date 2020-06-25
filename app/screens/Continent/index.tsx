import React from "react";
import { Layout } from "./Layout";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";
import { useQuery } from "@apollo/react-hooks";
import { Loading } from "../Loading";
import { GET_CONTINENTS } from "../../utility/querys/getContinent";

export const Continent = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  useSetNavigationOptions("Continent", true);

  if( loading ) {
    return <Loading />
  } 
  else if ( error ) {
    navigation.push("Error", {error: error});
  }
  else {
    return <Layout navigation={navigation} continents={data.continents}/>
  }
};
