import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
//import LandingPage from './components/LandingPage';


export default class App extends React.Component {
  
  // LoginClick = () => {
  //   console.log("Login Clicked");
  // }

  render() {
 state={
    email:"",
    password:""
  }    
    return (
      // <View style={styles.container}>
      //   {/* <LandingPage onPress={this.LoginClick}/>; */}
      // </View>
      <View>
        <Text>
          Hey
        </Text>
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
  }
});