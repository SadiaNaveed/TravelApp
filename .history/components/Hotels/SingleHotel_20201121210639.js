import React, { useEffect, useState } from "react";
import { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import hotelService from "../../services/HotelService";
import { icons, COLORS, FONTS, SIZES } from "../../constants";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

// const handleClick = () => {
//   <HotelBooking/>
// }
const SingleHotel = ({ hotel }) => {
  return (
    <View>
      {" "}
      <img
        src={hotel.Image}
        style={{
          marginLeft: "10px",
          height: "300px",
          width: "310px",
          backgroundColor: grey[50],
        }}
        alt="hotel"
      />
      <Text>{hotel.HotelName}</Text>
      <Text>Location {hotel.Location}</Text>
      <Text> Ratings {hotel.Ratings}</Text>
      {/* onClick={this.onButtonClick} */}
      <Button
        style={{
          backgroundColor: "#e7e7e7",
          color: "black",
          marginLeft: "5px",
          marginRight: "5px",
        }}
        onClick={this.onButtonClick}
      >
        View Details
      </Button>
      <Button style={{ backgroundColor: "#008CBA" }}>View on Map</Button>
    </View>
  );
};
export default SingleHotel;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //      justifyContent: "center",
  // },
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  // },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 5,
    borderWidth: 2,
    borderRadius: 30,
  },

  item: {
    backgroundColor: "pink",
    padding: 30,
    // marginVertical: 8,
    // marginHorizontal: 16,
    marginTop: 24,
    fontSize: 24,
  },
  title: {
    fontSize: 32,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  // item: {
  //   flex: 1,
  //   alignSelf: "stretch",
  //   margin: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderBottomWidth: 5,
  //   borderBottomColor: "#eee",
  // },
});
