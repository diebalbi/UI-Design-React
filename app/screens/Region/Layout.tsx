import React from "react";
import { SafeAreaView, SectionList } from "react-native";
import styled from "styled-components/native";
import { Headline  } from "react-native-paper";
import { Place } from "../Place";

export const Layout = ({ navigation, regions }) => (
  <Container>
    <SafeAreaView>
      <SectionList
        sections={regions.map( region => ({
          id: region.id,
          title: region.name,
          data: region.places
        }))}
        keyExtractor={(item) => item.id }
        renderItem={({ item }) => 
          <Place favorite={true} name={item.name} mainImageUrl={item.mainImageUrl} placeId={item.id} navigation={navigation} />
        }
        renderSectionHeader={({ section: { title } }) => (
          <Headline style={{marginVertical: 10}}>{title}</Headline>
        )}
      />
    </SafeAreaView>
  </Container>
)

const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
`;
