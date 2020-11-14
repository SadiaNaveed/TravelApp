import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import LandingPage from "./components/LandingPage";
// import { StackNavigator } from 'react-navigation';

export default class App extends Component {
 render()
 {
    return(
       <View>
          
          <LandingPage/>
       </View>
    );
 }
}



const styles = StyleSheet.create(
{
 

 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },

});