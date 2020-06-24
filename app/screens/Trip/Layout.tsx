import React from "react";
import { Headline, Card } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 

const LeftContent = props => <FontAwesome name="paper-plane" size={25} color={"rgb(25, 118, 210)"} {...props} />

export const Layout = ({ navigation, token, data }) => (
    <Container>
        { token ? 
            <FlatList
                data={data.trips}
                renderItem={ ({ item }) =>

                <TouchableOpacity onPress={() => {console.log("Me apretaron")}}>
                    <Card style={{marginVertical: 10}}>
                        <Card.Title title={item.name} left={LeftContent}/>
                    </Card>
                </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
            :
            <Headline style={{marginVertical: 10}}> You need login to see your trips </Headline>
        }
    </Container>
)

const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
`;