import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import LandingPage from "./components/LandingPage";
import LoginPage from './components/LoginPage';
// import { StackNavigator } from 'react-navigation';

export default class App extends Component {
 render()
 {
    return(
       <View style={{marginTop: 50}}>
          <Image
             source={{url:'https://images.pexels.com/photos/1590114/pexels-photo-1590114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
             style={{ width: "100%", height: 100, resizeMode: "contain" }} />
          </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
});
