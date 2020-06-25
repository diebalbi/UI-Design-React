import React from "react";
import { Headline, Card, Button, Title } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 
import { View, ActivityIndicator } from "react-native";

const LeftContent = props => <FontAwesome name="paper-plane" size={25} color={"rgb(25, 118, 210)"} {...props} />

export const Layout = ({ navigation, loadingData, handlePress, token, data, comeFromRoute}) => (
    <Container>
        { token ? 
            <View>
                { comeFromRoute ? 
                    <Title> Select the trip to add </Title>
                    :
                    <Button 
                        mode="contained" 
                        style={{backgroundColor: "rgb(25, 118, 210)", marginVertical: 10}} 
                        onPress={() => navigation.push("NewTrip")}
                    >
                        Add Trip
                    </Button>
                }
                <FlatList
                    data={data.trips}
                    renderItem={ ({ item }) =>
                        <TouchableOpacity onPress={() => handlePress(item.id)} disabled={loadingData} >
                            <Card style={{marginVertical: 10}}>
                                <Card.Title title={item.name} left={LeftContent}/>
                            </Card>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
                <ActivityIndicator style={{marginVertical: 10}} size="large" color="rgb(25, 118, 210)" animating={loadingData} />
            </View>
            :
            <Headline style={{marginVertical: 10}}> You need login to see your trips </Headline>
        }
    </Container>
)

const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
`;