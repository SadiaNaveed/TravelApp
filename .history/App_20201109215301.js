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
             source={{uri:'https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}}
             style={{ width: "100%", height: 300, resizeMode: "contain" }} />
       <Image
             source={{uri:'https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
             style={{ width: "100%", height: 300, resizeMode: "contain" }} />  
          <Image
             source={{uri:'https://images.pexels.com/photos/5487986/pexels-photo-5487986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
             style={{ width: "100%", height: 300, resizeMode: "contain" }} />  
          <Image
             source={{uri:'https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
             style={{ width: "100%", height: 300, resizeMode: "contain" }} />  
          <Image
             source={{uri:'https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
             style={{ width: "100%", height: 300, resizeMode: "contain" }} />  
          <Image
             source={{uri:'https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
             style={{ width: "100%", height: 300, resizeMode: "contain" }} />  
          <Image
             source={{uri:'https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
             style={{ width: "100%", height: 300, resizeMode: "contain" }} />  
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
