import React from "react";
import { Layout } from "./Layout";
import { useSetNavigationOptions } from "../../hooks/useSetNavigationOptions";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Loading } from "../Loading";

const GET_CONTINENTS = gql`
  {
    continents {
      id,
      name,
      places {
        id,
        name,
        mainImageUrl
      }
    }
  }
`;

export const Continent = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  useSetNavigationOptions("Continent", true);
  
  if( loading ) {
    return <Loading />
  } 
  else if ( error ) {
    console.log(error);
  }
  else {
    return <Layout navigation={navigation} continents={data.continents}/>
  }
};
