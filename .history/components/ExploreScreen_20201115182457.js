import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 31.582045,
          longitude: 74.329376,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
  container: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#ccc",
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -12,
  },
});
