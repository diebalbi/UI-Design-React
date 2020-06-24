import React from "react";
import { View, FlatList } from "react-native";
import { Paragraph, Title, Card, Avatar, Button, Subheading } from "react-native-paper";
import { Rating } from "react-native-ratings";

const LeftContent = props => <Avatar.Icon style={{backgroundColor: "rgb(25, 118, 210)"}}  {...props} icon="chat" />

const CardSubtitle = ({rating}) => (
    <Rating 
        type='custom'
        ratingCount={5} 
        readonly 
        startingValue={rating} 
        imageSize={20} 
        ratingColor='#3498db' 
    />
)

export const Layout = ({ navigation, placeId, reviews, token }) => (
    <View>
        <Title> Reviews </Title>
        { reviews.length === 0 ? 
            <Paragraph> There are no comments for this city yet ... </Paragraph>
            :
            <FlatList
                data={reviews}
                renderItem={ ({ item }) =>
                <Card style={{marginVertical: 10}}>
                    <Card.Title title={item.user.fullname} left={LeftContent}/>
                    <Card.Content>
                        <CardSubtitle rating={item.rating}/>
                        <Paragraph> {item.description} </Paragraph>
                    </Card.Content>
                </Card>
                }
                keyExtractor={item => item.id}
            />
        }
        { token ? 
            <Button 
                mode="contained" 
                style={{backgroundColor: "rgb(25, 118, 210)", marginVertical: 10}} 
                onPress={() => navigation.push("AddReview", {placeId:placeId})}
            >
                Add Review
            </Button>
            :
            <Subheading style={{textAlign: "center", fontWeight: "bold"}}> Sign in to send your review too! </Subheading>
        }
    </View>
)