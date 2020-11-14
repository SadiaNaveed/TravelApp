import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "2020 - 09 - 09(2).png" from "./images";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>AlligatorChef</Text>
<Text style={styles.h2}>Providing cajun bacon recipes since 1987.</Text>

      <StatusBar style="auto" />
    </View>
  );
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
});
