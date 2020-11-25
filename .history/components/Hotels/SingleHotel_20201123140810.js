import React, { useEffect, useState } from "react";
import { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import {
  View,
  Text,
  Image,
  Button,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import hotelService from "../../services/HotelService";
import { icons, COLORS, FONTS, SIZES } from "../../constants";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import base64 from "react-native-base64";

// const handleClick = () => {
//   <HotelBooking/>
// }
// const arrayBufferToBase64 = (buffer) => {
//   var binary = "";
//   var bytes = new Uint8Array(buffer);
//   // var len = bytes.byteLength;
//   bytes.forEach((b) => (binary += String.fromCharCode(b)));
//   return window.btoa(binary);
// };
arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  // return window.btoa(binary);
  return base64.encode(binary);
};
const SingleHotel = ({ hotel }) => {
  // let image = base64.decode(hotel.Image.data);
  // let base64convert =
  //   "data:image/jpeg;base64," + arrayBufferToBase64(hotel.Image.data.data);
  // var base64convert =
  //   "data:image/jpeg;base64," + base64.decode(hotel.Image.data.data);
  // Buffer.from("SOlsbPMgd/NybGQhIQ==", "base64").toString("binary");

  return (
    <View style={styles.box}>
      {/* <img
        src={{ uri: base64convert }}
        style={{
          marginLeft: "10px",
          height: "300px",
          width: "310px",
          backgroundColor: "gray",
        }}
        alt="hotel"
      /> */}
      <Image
        style={{
          width: 150,
          height: 87,
          resizeMode: "cover",
          backgroundColor: "red",
          // position: "absolute",
          // marginLeft: 140,
        }}
        source={{
          uri:
            "data:image/jpeg;base64," +
            arrayBufferToBase64(hotel.Image.data.data), //data.data in your case
        }}
      />
      <View style={{ position: "absolute", marginLeft: 160 }}>
        <Text>{hotel.HotelName}</Text>
        <Text>Location {hotel.Location}</Text>
        <Text> Ratings {hotel.Ratings}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("you clicked me");
          }}
        >
          <LinearGradient
            style={[
              {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                height: 130,
                width: 150,
                // backgroundColor: "red",
              },
            ]}
            colors={["#46aeff", "#5884ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Image
              source={require("../../assets/icons/right_arrow.png")}
              style={{ height: 10, width: 30 }}
            />
            <Text style={{ color: "black", fontSize: 13 }}>View Deatils</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* <Button style={{ width: 10 }} title="View Details"></Button> */}
      </View>

      {/* onClick={this.onButtonClick} */}
      {/* <Button
        style={{
          backgroundColor: "#e7e7e7",
          color: "black",
          marginLeft: "5px",
          marginRight: "5px",
        }}
        // onClick={this.onButtonClick}
        title="View Details"
      />
      <Button style={{ backgroundColor: "#008CBA" }} title="View on Map" /> */}
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
  box: {
    height: 120,
    borderWidth: 1,
    borderColor: "gray",
    margin: 10,
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
  button: {
    marginTop: 13,
    height: 50,
    // position: "absolute",
    marginLeft: 40,
    width: 190,
    // backgroundColor: "blue",
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
  },
});
