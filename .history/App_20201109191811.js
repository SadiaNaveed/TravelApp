import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

// import { StackNavigator } from 'react-navigation';

export default class App extends Component {
 render()
 {
    return(
       <View style = { styles.MainContainer }>
          <Text>
             Hey
              hello
</Text>
       </View>
    );
 }
}



const styles = StyleSheet.create(
{
 MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10
  
 },

 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },

});