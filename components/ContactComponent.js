import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';
// import Map from './MapComponent';
// import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
// import { Link } from 'react-router-dom';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['Boba@boba.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView>
                <Card wrapperStyle={{ margin: 20 }} title={"Contact Information"}>
                    <Text>1234 South Street</Text>
                    <Text>Philadelphia, PA 19107</Text>
                    <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                    <Text>Phone: 1-215-555-1234</Text>
                    <Text>Email: Boba@boba.com</Text>
                    <Button
                        title="Send Email"
                        buttonStyle={{ backgroundColor: 'rgb(113,201,44)', margin: 40 }}
                        icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />}
                        onPress={() => this.sendMail()}
                    />
                    {/* <div className="col-md order">
                        <h2 className="orderHeader">Contact Us</h2>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-215-555-1234</a>
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> Boba@boba.com</a>
                    </div> */}
                </Card>
                {/* <div className="row">
                    <div className="col-md">
                        <Map />
                    </div>
                </div> */}
            </ScrollView>
        );
    }
}

export default Contact;