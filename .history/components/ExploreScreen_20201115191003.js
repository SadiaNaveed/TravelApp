import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

const ExploreScreen = () => {
  return (
    <View>
      <MapView
        // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          image={require("../images/marker.png")}
          title="Test"
          description="Test Description"
        >
          <Callout></Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
  // container: {
  //   flexDirection: "column",
  //   alignSelf: "flex-start",
  // },
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
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 80,
  },
});
