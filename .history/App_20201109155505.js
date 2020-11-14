import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
//import LandingPage from './components/LandingPage';

const state={
    email:"",
    password:""
}    
  
export default class App extends React.Component {
  
  // LoginClick = () => {
  //   console.log("Login Clicked");
  // }

  render() {
 
    return (
      <View style={styles.container}>
        <View style={styles.inputView} >
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
   logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  }
});