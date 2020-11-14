import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Logo from "./images/logo.png";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>AlligatorChef</Text>
        <Text style={styles.h2}>Providing cajun bacon recipes since 1987.</Text>
        <Image
          source={Logo}
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
  <Button
    title="LET'S START"
    style={styles.button}
    onPress={() => this.onPress()}
    color="#fff"
  />
</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
  width: 300,
  height: 260,
  justifyContent: 'center',
  },
  buttonContainer: {
  backgroundColor: '#008F68',
  borderRadius: 5,
  padding: 8,
  margin: 8,
},
});
