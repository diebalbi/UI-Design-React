import React from "react";
import { SafeAreaView, SectionList } from "react-native";
import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { Place } from "../Place";

const data = [
  {
    "id": "5eced991a6ec2c2f6448813d",
    "name": "Africa",
    "places": []
  },
  {
    "id": "5ecedbe183230732301c6ead",
    "name": "Europa",
    "places": [
      {
        "id": "5edd5a61129de4226497f69e",
        "name": "Lugar calido",
        "description": "Hace calor",
        "mainImageUrl": "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile"
      },
      {
        "id": "5edd5abb129de4226497f69f",
        "name": "Prueba",
        "description": "Prueba",
        "mainImageUrl": "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile"
      },
      {
        "id": "5eeb1038837dbe4c5063e01f",
        "name": "London",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "mainImageUrl": "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile"
      },
      {
        "id": "5eeb1079837dbe4c5063e020",
        "name": "Paris",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "mainImageUrl": "https://lp-cms-production.imgix.net/2019-06/55425108.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
      },
      {
        "id": "5eeb10926a921506b8a0dd7c",
        "name": "Paris",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "mainImageUrl": "https://lp-cms-production.imgix.net/2019-06/55425108.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
      },
      {
        "id": "5eeb10b6aa79102ca0186be5",
        "name": "London",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "mainImageUrl": "https://lp-cms-production.imgix.net/2019-06/55425108.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
      }
    ]
  },
  {
    "id": "5ecedc0783230732301c6eae",
    "name": "América del Sur",
    "places": [
      {
        "id": "5edd5acd3aaafb14f87e2f76",
        "name": "Prueba 2",
        "description": "Prueba 2",
        "mainImageUrl": "https://lp-cms-production.imgix.net/2019-06/55425108.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
      }
    ]
  },
  {
    "id": "5eeaf1ce4d40c412501f553c",
    "name": "América del Norte",
    "places": []
  }
]

export const Layout = ({navigation}) => (
  <Container>
    <SafeAreaView>
      <SectionList
        sections={data.map( continent => ({
          id: continent.id,
          title: continent.name,
          data: continent.places
        }))}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => 
          <Place name={item.name} mainImageUrl={item.mainImageUrl} placeId={item.id} navigation={navigation} />
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
      />
    </SafeAreaView>
  </Container>
)

const Container = styled.View`
  flex: 1;
  padding: 0px 20px;
`;
