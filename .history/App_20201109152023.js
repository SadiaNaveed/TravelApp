import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

import Logo from "./images/logo.png";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <LandingPage/>;
      </View>
    );
  }
}
