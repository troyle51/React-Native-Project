import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        return (
            <ScrollView>
                <Card title={"About Project Boba"}>
                    <Text>
                        We are Project Boba. We came together to as a small group of boba loving college students. Throughout our years we dreamed of having our own boba shop. After many rough years, we have finally made it a reality. Please join us in sharing our love for boba!
                     </Text>
                </Card>
                <Card title={"Our Mission"}>
                    <Text>
                        Our mission is to provide top quality boba to all of our customers. We pride ourselves in serving the best boba in the area with the highest quality ingredients.
                    </Text>
                </Card>
            </ScrollView>

        );
    }
}

export default About;
