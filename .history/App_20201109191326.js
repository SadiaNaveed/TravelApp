import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

// import { StackNavigator } from 'react-navigation';

class App extends Component {
 render()
 {
    return(
       <View style = { styles.MainContainer }>

         <View style={{marginBottom: 20}}>

          <Text style = { styles.TextStyle }> This is MainActivity </Text>

         </View>

          <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Second Activity'/>
        
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