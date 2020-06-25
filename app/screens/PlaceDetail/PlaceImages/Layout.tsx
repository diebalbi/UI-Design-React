import React from "react";
import { View } from "react-native";
import { Title, Paragraph, Button, Subheading } from 'react-native-paper';
import Carousel, { Pagination } from "react-native-snap-carousel";

export const Layout = ({ placeId, navigation, renderItem, setActiveIndex, activeIndex, images, token }) => (
    <View>
        <Title> Images </Title>
        { images.length === 0 ?
            <Paragraph> There are no photos for this city yet... </Paragraph>
            :
            <View style={{justifyContent: "center", alignItems: "center", paddingVertical: 10}}>
                <Carousel 
                    layout={"default"}
                    data={images}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={renderItem}
                    onSnapToItem = { index => setActiveIndex(index) } 
                />
                <Pagination
                    dotsLength={images.length}
                    activeDotIndex={activeIndex}
                    containerStyle={{ backgroundColor: 'rgb(25, 118, 210)', width: 300}}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        }
        { token ? 
            <Button 
                mode="contained" 
                style={{backgroundColor: "rgb(25, 118, 210)", marginHorizontal: 10}} 
                onPress={() => navigation.push("UploadImage", {placeId: placeId})} >
                Add Image
            </Button>
            :
            <Subheading style={{textAlign: "center", fontWeight: "bold"}}> Login to upload a Image! </Subheading>
        }
    </View>
);
