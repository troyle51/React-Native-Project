import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button } from 'react-native';

class Menu extends Component {

    static navigationOptions = {
        title: 'Menu'
    }

    render() {
        return (
            <ScrollView>
                <Text>Menu</Text>
            </ScrollView>
            // <div className="container bg-white">
            //     <div className="col-md order">
            //         <br />
            //         <h1 className="contactHeader">Order</h1>
            //         <div>Please call us to place your order</div>
            //         <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-215-555-1234</a>
            //     </div>
            //     <hr />
            //     <div className="row row-contentd-flex justify-content-center mx-auto">
            //         <div className="col-10 pb-5 text-center">
            //             <h1 className="quicksand-font header text-uppercase contactHeader">Menu</h1>
            //         </div>
            //     </div>
            //     <hr />
            //     <div className="row d-flex justify-content-center">
            //         <div className="col-10 pb-5">
            //             <h4 className="text-center quicksand-font text-uppercase">Milk Tea</h4>
            //             <p className="text-uppercase quicksand-font text-uppercase">
            //                 Milk Tea
            //                     <span className="float-right">$4</span>
            //             </p>
            //             <p className="text-uppercase">
            //                 Caramel Milk Tea
            //                 <span className="float-right">$4.5</span>
            //             </p>
            //             <p className="text-uppercase">
            //                 Brown Sugar Milk Tea
            //                 <span className="float-right">$4.5</span>
            //             </p>
            //         </div>
            //     </div>
            //     <div className="row d-flex justify-content-center">
            //         <div className="col-10 pb-5">
            //             <h4 className="text-center quicksand-font text-uppercase">Smoothies</h4>
            //             <p className="text-uppercase">
            //                 Mango
            //                 <span className="float-right">$5</span>
            //             </p>
            //             <p className="text-uppercase">
            //                 Lychee
            //                 <span className="float-right">$5</span>
            //             </p>
            //         </div>
            //     </div>
            //     <div className="row d-flex justify-content-center">
            //         <div className="col-10 pb-5">
            //             <h4 className="text-center quicksand-font text-uppercase">Coffee</h4>
            //             <p className="text-uppercase">
            //                 Black
            //                 <span className="float-right">$4</span>
            //             </p>
            //             <p className="text-uppercase">
            //                 Milk
            //                 <span className="float-right">$4</span>
            //             </p>
            //         </div>
            //     </div>
            //     <hr />
            //     <div className="row d-flex justify-content-center">
            //         <div className="col-6 pb-5 text-center">
            //             <h4 className="text-center quicksand-font text-uppercase">Toppings</h4>
            //             <p className="text-uppercase">Pearls</p>
            //             <p className="text-uppercase">Aloe</p>
            //             <p className="text-uppercase">Jelly</p>
            //             <p className="text-uppercase">Pudding</p>
            //         </div>

            //         <div className="col-6 pb-5 text-center">
            //             <h4 className="text-center quicksand-font text-uppercase">Ice & Sugar Level</h4>
            //             <p className="text-uppercase">No Sugar, 50%, 100%</p>
            //             <p className="text-uppercase">No Ice, Less Ice, Regular Ice</p>
            //         </div>
            //     </div>
            //     <hr />
            // </div>
        );
    }
}


export default Menu;