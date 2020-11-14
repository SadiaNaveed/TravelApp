import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import LandingPage from './components/LandingPage';

import Logo from "./images/logo.png";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LandingPage/>;
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