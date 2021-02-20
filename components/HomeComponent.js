import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MyCarousel from './CarouselComponent';


class Home extends Component {
    // constructor(props) {
    //     super(props);

    // }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <MyCarousel />
        )
    }
}


export default Home;