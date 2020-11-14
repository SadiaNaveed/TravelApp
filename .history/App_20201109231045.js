import React, { Component } from 'react';

import {
   AppRegistry,
   StyleSheet, Dimensions, Text, ScrollView, View, Button, Image
} from 'react-native';
//import LandingPage from "./components/LandingPage";
// import { StackNavigator } from 'react-navigation';


export default class App extends Component {

   render()
 {
    return (
       <View style={styles.container}>
          <Text>
             Hey
          </Text>
{/* <LandingPage/> */}
        </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 0,
      width,
      height
   },
});
