import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import MyCarousel from './CarouselComponent';
import MapView from 'react-native-maps';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <View style={StyleSheet.container}>
                    <Card
                        title='Project Boba'>
                        {/* <View style={StyleSheet.heading}><Text>Project Boba</Text></View> */}
                        <MapView style={StyleSheet.map}
                            region={{
                                latitude: 39.953112528138504,
                                longitude: -75.16352621534142,
                                latitudeDelta: 0.04,
                                longitudeDelta: 0.05,
                            }}
                        />
                    </Card>
                </View>
            </ScrollView >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});


export default Home;