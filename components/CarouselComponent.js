import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { Text, View, SafeAreaView } from 'react-native';
import Image1 from "./image/image1.jpg";
import Image2 from "./image/image2.jpg";
import Image3 from "./image/image3.jpg";

class MyCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "image1",
                    src: { Image1 }
                },
                {
                    title: "image2",
                    src: { Image2 }
                },
                {
                    title: "image3",
                    src: { Image3 }
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.src}</Text>
            </View>

        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50, }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </SafeAreaView>
        );
    }
}

export default MyCarousel;
