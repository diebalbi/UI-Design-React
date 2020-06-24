import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { Title, Paragraph, Card, Avatar } from 'react-native-paper';
import styled from "styled-components/native";

const LeftContent = props => <Avatar.Icon style={{backgroundColor: "rgb(25, 118, 210)"}} {...props} icon="rowing" />

export const Layout = ({activities}) => (
    <SafeAreaView>
        <Title> Activities </Title>
        { activities.length === 0 ? 
            <Paragraph> There are no activities for this city yet ... </Paragraph>
            :
            <FlatList
                data={activities}
                renderItem={ ({ item }) => 
                    <View>
                        <Card style={{marginVertical: 10}}>
                            <Card.Title title={item.title} left={LeftContent} subtitle={item.price + " U$S"} />
                        </Card>
                    </View>
                }
                keyExtractor={item => item.id}
            />
        }
    </SafeAreaView>
);

const Item = styled.Text`
    background-color: rgb(25, 118, 210);
    padding: 10px;
    margin: 5px;
    color: white;
`
