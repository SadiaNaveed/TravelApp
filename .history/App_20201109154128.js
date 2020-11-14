import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import LandingPage from './components/LandingPage';


export default class App extends React.Component {
  
  // LoginClick = () => {
  //   console.log("Login Clicked");
  // }

  render() {
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
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
});