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

const HotelBooking = ({ route, navigation }) => {
  // Render
  // const { hotel } = route.params;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 1 }}>
        <Image
          //source={images.skiVillaBanner}
          source={{
            uri:
              "data:image/jpeg;base64," +
              arrayBufferToBase64(route.params.hotel.Image.data.data), //data.data in your case
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "70%",
          }}
        />
        <View
          style={[
            {
              position: "absolute",
              bottom: "5%",
              left: "5%",
              right: "5%",
              borderRadius: 15,
              padding: SIZES.padding,
              backgroundColor: COLORS.white,
            },
            styles.shadow,
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                //source={images.skiVilla}
                source={{
                  uri:
                    "data:image/jpeg;base64," +
                    arrayBufferToBase64(route.params.hotel.Image.data.data), //data.data in your case
                }}
                resizeMode="cover"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...FONTS.h3 }}>
                {route.params.hotel.HotelName}
              </Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                {route.params.hotel.Location}
              </Text>

              <StarReview rate={route.params.hotel.Ratings} />
            </View>
          </View>

          <View style={{ marginTop: SIZES.radius }}>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Ski Villa offers simple rooms with mountain views in front of the
              ski lift to the Ski Resort
            </Text>
          </View>
        </View>

        {/* Header Buttons */}
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            //height: 50,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Image
                source={icons.back}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={() => {
                console.log("Menu on pressed");
              }}
            >
              <Image
                source={icons.menu}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default HotelBooking;